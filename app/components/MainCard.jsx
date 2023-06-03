const MainCard=({cardTitle,cardContent,cardImg})=>{
return(
<article className="flex flex-col items-center border-2 p-6 bg-red-800 border-black">
  <img src={cardImg} alt="" />
  <h3>{cardTitle}</h3>
  <p>{cardContent}</p>
</article>
)
}
export default MainCard;
