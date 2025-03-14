import {create} from "zustand";
import dayjs from "dayjs";

type Option = {
    typeCd: string,
    selectedOptions: string[],
}

interface FilterState {
    selectedOptions: Record<string, string[]>;  // Map -> 일반 객체로 변경
    setSelectedOptions(options: Record<string, string[]>): void;
    getSelectedOptions(typeCd: string): string[] | undefined;
    setInitialOptions(initialOptions: Record<string, string[]>): void;
}

const initialOptions: Record<string, string[]> = {
    startDt: [dayjs().startOf("year").format("YYYY-MM-DD")],
    endDt: [dayjs().subtract(1, "days").format("YYYY-MM-DD")],
    month: [dayjs().subtract(1, "day").format("YYYY-MM")],
    STAT: [],
    CUST: [],
    PRDL: []
};

const useFilterStore = create<FilterState>((set, get) => ({
    selectedOptions: initialOptions,
    setSelectedOptions: (options: Record<string, string[]>) =>
        set((state) => ({
            selectedOptions: { ...state.selectedOptions, ...options }
        })),
    getSelectedOptions: (typeCd: string) => get().selectedOptions[typeCd],
    setInitialOptions: (initialOptions) => set({ selectedOptions: initialOptions }),
}));

export default useFilterStore;