declare var module: NodeModule;

interface NodeModule {
    id: string;
}

declare module "*.json" {
    export let version;
    export let author;
    export let name;
}