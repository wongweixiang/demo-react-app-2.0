import dbs from "../svgs/dbs.svg";
import posb from "../svgs/posb.svg";
import ocbc from "../svgs/ocbc.svg";
import uob from "../svgs/uob.svg";
import sc from "../svgs/sc.svg";
import hsbc from "../svgs/hsbc.svg";

const SvgMapper = ({
  bankAbbrev,
  width = "100px",
}: {
  bankAbbrev: string;
  width?: string;
}) => {
  const bankMapping: Record<string, string> = {
    DBS: dbs,
    POSB: posb,
    OCBC: ocbc,
    UOB: uob,
    SC: sc,
    HSBC: hsbc,
  };

  return <img src={bankMapping[bankAbbrev]} width={width} />;
};
export default SvgMapper;
