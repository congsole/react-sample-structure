import { create } from "zustand";
import dayjs from "dayjs";

const initialState = {
    startDt: dayjs() === dayjs().startOf("month") ? dayjs().subtract(1, "month").startOf("month").format("YYYY-MM-DD") : dayjs().subtract(1, "days").format("YYYY-MM-DD"),
    endDt: dayjs().subtract(1, "days").format("YYYY-MM-DD"),
    month: dayjs().subtract(1, "day").format("YYYY-MM"),
    CITY: [""]
}

interface Filter {

}

const useFilterStore = create<>(

);