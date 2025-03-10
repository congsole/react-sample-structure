export type QueryStringObj = Record<
  string,
  string | string[] | number | boolean | undefined
>;

export function buildUrl(baseUrl: string, queryString: QueryStringObj): string {
  const query = Object.entries(queryString)
    .filter(
      ([_, value]) => value !== undefined && value !== null && value !== "",
    ) // undefined나 null 값 필터링
    .map(([key, value]) => {
      // string[]을 "value1|value2|value3" 형태로 변환
      const encodedValue = Array.isArray(value)
        ? value.map((v) => encodeURIComponent(v)).join("|")
        : encodeURIComponent(String(value));
      return `${encodeURIComponent(key)}=${encodedValue}`;
    })
    .join("&");

  return query ? `${baseUrl}?${query}` : baseUrl;
}

// export function updateSearchParamsWithoutRerender(
//   queryStringObj: QueryStringObj,
// ) {
//   const searchParams = new URLSearchParams(window.location.search);
//
//   const originObj = Array.from(searchParams.entries()).reduce(
//     (acc: Record<string, string>, [key, values]) => {
//       acc[key] = values;
//       return acc;
//     },
//     {},
//   );
//   window.history.pushState(
//     null,
//     "",
//     buildUrl(location.pathname, { ...originObj, ...queryStringObj }),
//   );
// }

// 정규표현식에서 특별한 의미를 갖는 문자 이스케이프
export function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// 주어진 텍스트와 참고맵을 이용하여 텍스트에 참고맵의 키가 있다면 값으로 치환
export function replaceValueWithMap(inputText: string, refMap: object): string {
  let result = inputText;
  for (const key in refMap) {
    // 입력 텍스트에 참고맵의 키가 있다면
    if (result.includes(key)) {
      const escapedKey = escapeRegExp(key);
      // 정규표현식을 사용하여 문자열 내의 모든 해당 키를 치환
      result = result.replace(
        new RegExp(escapedKey, "g"),
        refMap[key as keyof typeof refMap],
      );
    }
  }
  return result;
}

export function getPopupMenuName(pathname: string) {
  if (pathname === "/" || pathname === "/main") {
    return "MAIN";
  }
  if (pathname.startsWith("/aimc")) {
    return "AIMC";
  }
  if (pathname.startsWith("/aicm")) {
    return "AICA";
  }
  if (pathname.startsWith("/aiic")) {
    return "AIIC";
  }
}
