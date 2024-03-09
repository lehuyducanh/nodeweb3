class NodeNumpy {
  static add(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error("Array lengths must be equal");
    }
    return arr1.map((val, index) => val + arr2[index]);
  }

  static subtract(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error("Array lengths must be equal");
    }
    return arr1.map((val, index) => val - arr2[index]);
  }

  static multiply(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error("Array lengths must be equal");
    }
    return arr1.map((val, index) => val * arr2[index]);
  }

  static divide(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error("Array lengths must be equal");
    }
    return arr1.map((val, index) => val / arr2[index]);
  }

  static dot(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error("Array lengths must be equal");
    }
    return arr1.reduce((sum, val, index) => sum + val * arr2[index], 0);
  }

  static sum(arr) {
    return arr.reduce((sum, val) => sum + val, 0);
  }

  static mean(arr) {
    return NodeNumpy.sum(arr) / arr.length;
  }

  static max(arr) {
    return Math.max(...arr);
  }

  static min(arr) {
    return Math.min(...arr);
  }
}
