export const PolicyCard = ({title, imgUrl,}) => {

  return (
    <div className="mx-3 my-4 cursor-pointer">
      <div className="h-[72px]">
        <div className="text-text-primary text-2xl font-bold">{title}</div>
      </div>
      <div>
        <img src={imgUrl} alt="policy"  className="h-[350px] w-[350px] object-contain"/>
      </div>
    </div>
  );
};
