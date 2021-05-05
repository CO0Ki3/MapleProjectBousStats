import EternalBonusStatsCalc from '../Calc/EternalBonusStatsCalc';
import PowerfulBonusStatsCalc from '../Calc/PowerfulBonusStatsCalc';

function LayoutCalc({ value, key_ }) {
  if(parseInt(value,10) === 7) {
    return (
      <EternalBonusStatsCalc value={value} key_={key_}/>
    ) 
  } else if(parseInt(value, 10) === 3) {
    return (
      <PowerfulBonusStatsCalc value={value} key_={key_}/>
    )
  } else {
    return (
      <>
        <EternalBonusStatsCalc value={value} key_={key_}/>
        <PowerfulBonusStatsCalc value={value} key_={key_}/>
      </>
    )
  }
}

export default LayoutCalc;