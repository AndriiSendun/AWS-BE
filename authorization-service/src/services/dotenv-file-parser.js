	
module.exports = function({ dotenv, paths }) {
  const variables = paths
    .map(path => {
      console.log(path, 'path')
      const { parsed } = dotenv.config({ path });
      const credentials = Object.entries(parsed).map(([ user, pass ]) => `${ user }:${ pass }`).join(',');

      console.log(parsed, 'parsed')
      return { CREDENTIALS: credentials };
    });
 
  console.log('variables', variables);
  return variables.reduce((acc, curr) => ({ ...acc, ...curr }), {})
}