"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Javascript Storage tool to use Local and Session Storage on objects and other non-string data.
 */
class EzStorage {
  /**
   * Looks for the storage value on your localStorage, and if it finds it, it returns it, otherwhise it returns NULL.
   * @param {String} storage The name of the storage in localStorage that will be loaded.
   * @param {String} oldStorage (Optional) The name of the storage in localStorage that will be deleted.
   */
  static localLoad(storage) {
    let oldStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (oldStorage !== '' && localStorage.getItem(oldStorage)) localStorage.removeItem(oldStorage);
    const parsedData = localStorage.getItem(storage);
    return parsedData ? JSON.parse(parsedData) : null;
  }
  /**
   * Looks for the storage value on your sessionStorage, and if it finds it, it returns it, otherwhise it returns NULL.
   * @param {String} storage The name of the storage in sessionStorage that will be loaded.
   * @param {String} oldStorage (Optional) The name of the storage in sessionStorage that will be deleted.
   */


  static sessionLoad(storage) {
    let oldStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (oldStorage !== null && sessionStorage.getItem(oldStorage)) sessionStorage.removeItem(oldStorage);
    const parsedData = sessionStorage.getItem(storage);
    return parsedData ? JSON.parse(parsedData) : null;
  }
  /**
   * Checks if localStorage is available at the moment, and if does, saves the data into the selected storage.
   * @param {String} storage the name of the storage.
   * @param {Object} data the object that will be saved in the storage.
   */


  static localSave(storage, data) {
    if (typeof EzStorage !== 'undefined') {
      localStorage.setItem(storage, JSON.stringify(data));
      return true;
    }

    console.log('ERROR: No web storage support. Using a temporal storage instead');
    return false;
  }
  /**
   * Checks if sessionStorage is available at the moment, and if does, saves the data into the selected storage.
   * @param {String} storage the name of the storage.
   * @param {Object} data the object that will be saved in the storage.
   */


  static sessionSave(storage, data) {
    if (typeof EzStorage !== 'undefined') {
      sessionStorage.setItem(storage, JSON.stringify(data));
      return true;
    }

    console.log('ERROR: No web storage support. Using a temporal storage instead');
    return false;
  }

}

exports.default = EzStorage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJFelN0b3JhZ2UiLCJsb2NhbExvYWQiLCJzdG9yYWdlIiwib2xkU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwicGFyc2VkRGF0YSIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25Mb2FkIiwic2Vzc2lvblN0b3JhZ2UiLCJsb2NhbFNhdmUiLCJkYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uU2F2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHZSxNQUFNQSxTQUFOLENBQWdCO0FBQzdCOzs7OztBQU1BLFNBQU9DLFNBQVAsQ0FBaUJDLE9BQWpCLEVBQTBFO0FBQUEsUUFBeENDLFVBQXdDLHVFQUFuQixFQUFtQjtBQUN4RSxRQUFJQSxVQUFVLEtBQUssRUFBZixJQUFxQkMsWUFBWSxDQUFDQyxPQUFiLENBQXFCRixVQUFyQixDQUF6QixFQUEyREMsWUFBWSxDQUFDRSxVQUFiLENBQXdCSCxVQUF4QjtBQUMzRCxVQUFNSSxVQUF5QixHQUFHSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUJILE9BQXJCLENBQWxDO0FBQ0EsV0FBT0ssVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsVUFBWCxDQUFILEdBQTRCLElBQTdDO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFNBQU9HLFdBQVAsQ0FBbUJSLE9BQW5CLEVBQTRFO0FBQUEsUUFBeENDLFVBQXdDLHVFQUFuQixFQUFtQjtBQUMxRSxRQUFJQSxVQUFVLEtBQUssSUFBZixJQUF1QlEsY0FBYyxDQUFDTixPQUFmLENBQXVCRixVQUF2QixDQUEzQixFQUErRFEsY0FBYyxDQUFDTCxVQUFmLENBQTBCSCxVQUExQjtBQUMvRCxVQUFNSSxVQUF5QixHQUFHSSxjQUFjLENBQUNOLE9BQWYsQ0FBdUJILE9BQXZCLENBQWxDO0FBQ0EsV0FBT0ssVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsVUFBWCxDQUFILEdBQTRCLElBQTdDO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFNBQU9LLFNBQVAsQ0FBaUJWLE9BQWpCLEVBQWtDVyxJQUFsQyxFQUF5RDtBQUN2RCxRQUFJLE9BQVFiLFNBQVIsS0FBdUIsV0FBM0IsRUFBd0M7QUFDdENJLE1BQUFBLFlBQVksQ0FBQ1UsT0FBYixDQUFxQlosT0FBckIsRUFBOEJNLElBQUksQ0FBQ08sU0FBTCxDQUFlRixJQUFmLENBQTlCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0RHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlFQUFaO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFNBQU9DLFdBQVAsQ0FBbUJoQixPQUFuQixFQUFvQ1csSUFBcEMsRUFBMkQ7QUFDekQsUUFBSSxPQUFRYixTQUFSLEtBQXVCLFdBQTNCLEVBQXdDO0FBQ3RDVyxNQUFBQSxjQUFjLENBQUNHLE9BQWYsQ0FBdUJaLE9BQXZCLEVBQWdDTSxJQUFJLENBQUNPLFNBQUwsQ0FBZUYsSUFBZixDQUFoQztBQUNBLGFBQU8sSUFBUDtBQUNEOztBQUNERyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpRUFBWjtBQUNBLFdBQU8sS0FBUDtBQUNEOztBQWxENEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEphdmFzY3JpcHQgU3RvcmFnZSB0b29sIHRvIHVzZSBMb2NhbCBhbmQgU2Vzc2lvbiBTdG9yYWdlIG9uIG9iamVjdHMgYW5kIG90aGVyIG5vbi1zdHJpbmcgZGF0YS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXpTdG9yYWdlIHtcbiAgLyoqXG4gICAqIExvb2tzIGZvciB0aGUgc3RvcmFnZSB2YWx1ZSBvbiB5b3VyIGxvY2FsU3RvcmFnZSwgYW5kIGlmIGl0IGZpbmRzIGl0LCBpdCByZXR1cm5zIGl0LCBvdGhlcndoaXNlIGl0IHJldHVybnMgTlVMTC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0b3JhZ2UgVGhlIG5hbWUgb2YgdGhlIHN0b3JhZ2UgaW4gbG9jYWxTdG9yYWdlIHRoYXQgd2lsbCBiZSBsb2FkZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRTdG9yYWdlIChPcHRpb25hbCkgVGhlIG5hbWUgb2YgdGhlIHN0b3JhZ2UgaW4gbG9jYWxTdG9yYWdlIHRoYXQgd2lsbCBiZSBkZWxldGVkLlxuICAgKi9cblxuICBzdGF0aWMgbG9jYWxMb2FkKHN0b3JhZ2U6IHN0cmluZywgb2xkU3RvcmFnZTogc3RyaW5nID0gJycpOiBvYmplY3QgfCBudWxsIHtcbiAgICBpZiAob2xkU3RvcmFnZSAhPT0gJycgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0ob2xkU3RvcmFnZSkpIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG9sZFN0b3JhZ2UpO1xuICAgIGNvbnN0IHBhcnNlZERhdGE6IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlKTtcbiAgICByZXR1cm4gcGFyc2VkRGF0YSA/IEpTT04ucGFyc2UocGFyc2VkRGF0YSkgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIExvb2tzIGZvciB0aGUgc3RvcmFnZSB2YWx1ZSBvbiB5b3VyIHNlc3Npb25TdG9yYWdlLCBhbmQgaWYgaXQgZmluZHMgaXQsIGl0IHJldHVybnMgaXQsIG90aGVyd2hpc2UgaXQgcmV0dXJucyBOVUxMLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RvcmFnZSBUaGUgbmFtZSBvZiB0aGUgc3RvcmFnZSBpbiBzZXNzaW9uU3RvcmFnZSB0aGF0IHdpbGwgYmUgbG9hZGVkLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkU3RvcmFnZSAoT3B0aW9uYWwpIFRoZSBuYW1lIG9mIHRoZSBzdG9yYWdlIGluIHNlc3Npb25TdG9yYWdlIHRoYXQgd2lsbCBiZSBkZWxldGVkLlxuICAgKi9cbiAgc3RhdGljIHNlc3Npb25Mb2FkKHN0b3JhZ2U6IHN0cmluZywgb2xkU3RvcmFnZTogc3RyaW5nID0gJycpOiBvYmplY3QgfCBudWxsIHtcbiAgICBpZiAob2xkU3RvcmFnZSAhPT0gbnVsbCAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKG9sZFN0b3JhZ2UpKSBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKG9sZFN0b3JhZ2UpO1xuICAgIGNvbnN0IHBhcnNlZERhdGE6IHN0cmluZyB8IG51bGwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2UpO1xuICAgIHJldHVybiBwYXJzZWREYXRhID8gSlNPTi5wYXJzZShwYXJzZWREYXRhKSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGxvY2FsU3RvcmFnZSBpcyBhdmFpbGFibGUgYXQgdGhlIG1vbWVudCwgYW5kIGlmIGRvZXMsIHNhdmVzIHRoZSBkYXRhIGludG8gdGhlIHNlbGVjdGVkIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdG9yYWdlIHRoZSBuYW1lIG9mIHRoZSBzdG9yYWdlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgb2JqZWN0IHRoYXQgd2lsbCBiZSBzYXZlZCBpbiB0aGUgc3RvcmFnZS5cbiAgICovXG4gIHN0YXRpYyBsb2NhbFNhdmUoc3RvcmFnZTogc3RyaW5nLCBkYXRhOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIChFelN0b3JhZ2UpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdFUlJPUjogTm8gd2ViIHN0b3JhZ2Ugc3VwcG9ydC4gVXNpbmcgYSB0ZW1wb3JhbCBzdG9yYWdlIGluc3RlYWQnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHNlc3Npb25TdG9yYWdlIGlzIGF2YWlsYWJsZSBhdCB0aGUgbW9tZW50LCBhbmQgaWYgZG9lcywgc2F2ZXMgdGhlIGRhdGEgaW50byB0aGUgc2VsZWN0ZWQgc3RvcmFnZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0b3JhZ2UgdGhlIG5hbWUgb2YgdGhlIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHNhdmVkIGluIHRoZSBzdG9yYWdlLlxuICAgKi9cbiAgc3RhdGljIHNlc3Npb25TYXZlKHN0b3JhZ2U6IHN0cmluZywgZGF0YTogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiAoRXpTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oc3RvcmFnZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdFUlJPUjogTm8gd2ViIHN0b3JhZ2Ugc3VwcG9ydC4gVXNpbmcgYSB0ZW1wb3JhbCBzdG9yYWdlIGluc3RlYWQnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==