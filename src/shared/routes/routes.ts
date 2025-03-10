import { useLocation, useNavigate } from "react-router-dom";

// usePathname 대체 (Next.js → React Router)
export function usePathname() {
    const location = useLocation();
    return location.pathname;
}

// useRouter 대체 (Next.js → React Router)
export function useRouter() {
    const navigate = useNavigate();

    return {
        push: navigate, // Next.js의 router.push() → React Router의 navigate()
        replace: (path: string) => navigate(path, { replace: true }),
        pathname: usePathname(),
    };
}

export function useSearchParams() {
    const { search } = useLocation();
    return new URLSearchParams(search);
}