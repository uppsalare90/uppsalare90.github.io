window.pdgaRankingCache = {
  load(key, signature) {
    try {
      const serialized = window.localStorage.getItem(key);
      if (!serialized) {
        return null;
      }

      const cached = JSON.parse(serialized);
      if (
        !cached ||
        cached.signature !== signature ||
        !Object.prototype.hasOwnProperty.call(cached, "data")
      ) {
        return null;
      }

      return cached.data;
    } catch (error) {
      console.error("Could not read local PDGA cache:", key, error);
      return null;
    }
  },

  save(key, signature, data) {
    try {
      window.localStorage.setItem(
        key,
        JSON.stringify({ signature, data })
      );
    } catch (error) {
      console.error("Could not save local PDGA cache:", key, error);
    }
  }
};
