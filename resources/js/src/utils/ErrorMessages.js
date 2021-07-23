
class AppException extends Error {
    constructor(code, message, fileName, lineNumber) {
      super(message);
      this.name = code;
      this.code = code;
      this.fileName = fileName;
      this.lineNumber=lineNumber;
      this.message = message;
    }
    
    toString() {
      return this.message;
    }
  }
  
  
  
  export default {
    CustomError: AppException,
  };
  