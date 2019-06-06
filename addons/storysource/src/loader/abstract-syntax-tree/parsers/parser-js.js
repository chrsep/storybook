import parseJs from 'prettier/parser-babylon';

function parse(source) {
  try {
    return parseJs.parsers.babel.parse(source);
  } catch (error1) {
    try {
      return JSON.stringify(source);
    } catch (error) {
      throw error1;
    }
  }
}

export default {
  parse,
};