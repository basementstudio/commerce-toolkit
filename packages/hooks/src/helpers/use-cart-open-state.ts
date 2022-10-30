import * as React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

let isOpenCache = false;
let syncedWithQueryParam = false;

export type UseCartOpenStateOptions = {
  syncWithQueryParam?: boolean | { key: string };
};

export const useCartOpenState = ({
  syncWithQueryParam,
}: UseCartOpenStateOptions) => {
  const queryClient = useQueryClient();

  const queryParamKey = React.useMemo(() => {
    if (syncWithQueryParam === true) {
      return "cart";
    }
    if (typeof syncWithQueryParam === "object") {
      return syncWithQueryParam.key;
    }
    return null;
  }, [syncWithQueryParam]);

  const { data: isOpen } = useQuery(["cart-open-state"], () => {
    if (syncWithQueryParam && !syncedWithQueryParam) return undefined;
    return isOpenCache;
  });

  const applyCache = React.useCallback(() => {
    queryClient.setQueriesData(["cart-open-state"], isOpenCache);
  }, [queryClient]);

  const open = React.useCallback(() => {
    isOpenCache = true;
    applyCache();

    if (queryParamKey) {
      const url = new URL(window.location.href);
      url.searchParams.set(queryParamKey, "open");
      window.history.replaceState({}, "", url.toString());
    }
  }, [queryParamKey, applyCache]);

  const close = React.useCallback(() => {
    isOpenCache = false;
    applyCache();

    if (queryParamKey) {
      const url = new URL(window.location.href);
      url.searchParams.delete(queryParamKey);
      window.history.replaceState({}, "", url.toString());
    }
  }, [queryParamKey, applyCache]);

  const toggle = React.useCallback(() => {
    isOpenCache = !isOpenCache;
    applyCache();

    if (queryParamKey) {
      const url = new URL(window.location.href);
      if (isOpenCache) {
        url.searchParams.set(queryParamKey, "open");
      } else {
        url.searchParams.delete(queryParamKey);
      }
      window.history.replaceState({}, "", url.toString());
    }
  }, [queryParamKey, applyCache]);

  React.useEffect(() => {
    if (queryParamKey) {
      const urlParams = new URLSearchParams(window.location.search);
      const value = urlParams.get(queryParamKey);
      isOpenCache = value === "open";
      syncedWithQueryParam = true;
      applyCache();
    }
  }, [queryParamKey, applyCache]);

  return { isOpen, open, close, toggle };
};
