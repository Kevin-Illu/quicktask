export { };

declare global {
    interface Window {
        mainApi: MainApi;
    }
}
// mianApi
interface MainApi {
    trafficsLightsAction(action: string): void;
}

export type todoState = "open" | "work" | "done" | "on hold" | string;

export type btnSettings = {
    icon: string | null;
    text: string | null;
    func: VoidFunction | null | ((e: Event) => void);
    styles: string[];
};

export type Todo = {
    id: number;
    title: string;
    description: string;
    state: todoState;
};

export type addTodo = {
    title: string,
    description: string,
    state: todoState
}