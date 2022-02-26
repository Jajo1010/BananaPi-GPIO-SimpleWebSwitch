
import { exec } from 'child_process'

export function turnOn(){
  return new Promise((resolve,reject) => {
    exec('sh ./turnOn.sh',(error,stdout,stderr) => {
      if(error) {
        console.warn(error)
      }
      resolve (stdout? stdout : stderr);
    })
  });
}
/*export const turnOn = () => {
  try {
    exec('sh ./turnOn.sh', (error, stdout, stderr) => {
      if (error != null) {
        console.log(error)
        return
      }
        console.log(stdout)
        console.log(stderr)
      });
  } catch (err) {
    return err
  }

}
*/
