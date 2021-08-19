/**
 * Utility for determining the type of a data value.
 */
export class Is {
  static array(value: any): boolean {
    if (Array.isArray) {
      return Array.isArray(value);
    }
    return (
      Boolean(value) && typeof value === 'object' && value.constructor === Array
    );
  }

  static boolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  static date(value: any): boolean {
    return value instanceof Date;
  }

  static function(value: any): boolean {
    return typeof value === 'function';
  }

  static number(value: any): boolean {
    return typeof value === 'number' && isFinite(value);
  }

  static null(value: any): boolean {
    return value === null;
  }

  static object(value: any): boolean {
    return (
      Boolean(value) &&
      typeof value === 'object' &&
      value.constructor === Object
    );
  }

  static regExp(value: any): boolean {
    return (
      Boolean(value) &&
      typeof value === 'object' &&
      value.constructor === RegExp
    );
  }

  static string(value: any): boolean {
    return typeof value === 'string' || value instanceof String;
  }

  static symbol(value: any): boolean {
    return typeof value === 'symbol';
  }

  static undefined(value: any): boolean {
    return typeof value === 'undefined';
  }
}
