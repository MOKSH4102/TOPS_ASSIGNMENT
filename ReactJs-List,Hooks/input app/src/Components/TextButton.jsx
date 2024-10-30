
function TextButton({fooddata}){
    return <>
    <div >
          {fooddata.map((item)=><li key={item}>{item}</li>)}
    </div>
    </>
}
export default TextButton
