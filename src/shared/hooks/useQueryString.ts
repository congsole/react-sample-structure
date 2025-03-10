import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "shared/routes/routes";



type ObjectTypeNameValue = {
  name: string;
  value: string;
};

const useQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const urlSearchParams = new URLSearchParams(searchParams.toString());

      if (value && value !== "") {
        urlSearchParams.set(name, value);
      } else {
        urlSearchParams.delete(name);
      }

      return urlSearchParams.toString();
    },
    [searchParams],
  );

  const createQueryStringList = useCallback(
    (params: Array<ObjectTypeNameValue>) => {
      const urlSearchParams = searchParams;

      params.forEach((m: ObjectTypeNameValue) => {
        if (m.value && m.value !== "") {
          urlSearchParams.set(m.name, m.value);
        } else {
          urlSearchParams.delete(m.name);
        }
      });

      return urlSearchParams.toString();
    },
    [searchParams],
  );

  return {
    router,
    pathname,
    searchParams,
    createQueryString,
    createQueryStringList,
  };
};

export default useQueryString;
