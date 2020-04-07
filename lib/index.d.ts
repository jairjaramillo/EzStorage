/**
 * Javascript Storage tool to use Local and Session Storage on objects and other non-string data.
 */
export default class EzStorage {
    /**
     * Looks for the storage value on your localStorage, and if it finds it, it returns it, otherwhise it returns NULL.
     * @param {String} storage The name of the storage in localStorage that will be loaded.
     * @param {String} oldStorage (Optional) The name of the storage in localStorage that will be deleted.
     */
    static localLoad(storage: string, oldStorage?: string): object | null;
    /**
     * Looks for the storage value on your sessionStorage, and if it finds it, it returns it, otherwhise it returns NULL.
     * @param {String} storage The name of the storage in sessionStorage that will be loaded.
     * @param {String} oldStorage (Optional) The name of the storage in sessionStorage that will be deleted.
     */
    static sessionLoad(storage: string, oldStorage?: string): object | null;
    /**
     * Checks if localStorage is available at the moment, and if does, saves the data into the selected storage.
     * @param {String} storage the name of the storage.
     * @param {Object} data the object that will be saved in the storage.
     */
    static localSave(storage: string, data: object): boolean;
    /**
     * Checks if sessionStorage is available at the moment, and if does, saves the data into the selected storage.
     * @param {String} storage the name of the storage.
     * @param {Object} data the object that will be saved in the storage.
     */
    static sessionSave(storage: string, data: object): boolean;
}
//# sourceMappingURL=index.d.ts.map