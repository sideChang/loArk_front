import { useParams } from "react-router-dom";
import { fetchArkpassive } from "../api/api";
import { useQuery } from "react-query";
import type { IArkPassive } from "../interface/armories";

const ArkPassive = () => {
  const { chracname } = useParams() as { chracname: string };

  const { isLoading: arkPaLoading, data: arkpassiveData } =
    useQuery<IArkPassive>("arkpa", () => fetchArkpassive(chracname));

  console.log(arkpassiveData);

  return (
    <div className="ark-passive-container">
      {arkPaLoading && <div>로딩중</div>}
      {arkpassiveData && (
        <>
          {arkpassiveData.Points.map((point, index) => (
            <div key={index} className="passive-point">
              <span>{point.Name}</span>
              <span>{point.value}</span>
              <span>{point.Description}</span>
            </div>
          ))}

          {arkpassiveData.Effects.map((effect, index) => (
            <div key={index} className="passive-effect">
              <img src={effect.Icon} />
              <span>{effect.Name}</span>

              <div
                className="effect-description"
                dangerouslySetInnerHTML={{ __html: effect.Description }}
              />
              <span>{effect.ToolTip}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ArkPassive;
