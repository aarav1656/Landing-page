import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ExpandTrueStyle01Type = {
  tinciduntDolorId?: string;
  iconFeatherIcon?: string;
  tinciduntPurusAtAmetEuNis?: string;

  /** Style props */
  expandTrueStyle01BackgroundColor?: CSSProperties["backgroundColor"];
  expandTrueStyle01BoxShadow?: CSSProperties["boxShadow"];
  expandTrueStyle01Width?: CSSProperties["width"];
  expandTrueStyle01Padding?: CSSProperties["padding"];
  expandTrueStyle01Gap?: CSSProperties["gap"];
  expandTrueStyle01Background?: CSSProperties["background"];
  expandTrueStyle01Height?: CSSProperties["height"];
  expandTrueStyle01ZIndex?: CSSProperties["zIndex"];
  tinciduntDolorIdLetterSpacing?: CSSProperties["letterSpacing"];
  tinciduntDolorIdLineHeight?: CSSProperties["lineHeight"];
  tinciduntDolorIdTextTransform?: CSSProperties["textTransform"];
  tinciduntDolorIdFontWeight?: CSSProperties["fontWeight"];
  tinciduntDolorIdFontFamily?: CSSProperties["fontFamily"];
  tinciduntDolorIdColor?: CSSProperties["color"];
  tinciduntPurusAtFontSize?: CSSProperties["fontSize"];
  tinciduntPurusAtLetterSpacing?: CSSProperties["letterSpacing"];
  tinciduntPurusAtLineHeight?: CSSProperties["lineHeight"];
  tinciduntPurusAtFontFamily?: CSSProperties["fontFamily"];
  tinciduntPurusAtColor?: CSSProperties["color"];
};

const ExpandTrueStyle01: NextPage<ExpandTrueStyle01Type> = ({
  tinciduntDolorId,
  iconFeatherIcon,
  tinciduntPurusAtAmetEuNis,
  expandTrueStyle01BackgroundColor,
  expandTrueStyle01BoxShadow,
  expandTrueStyle01Width,
  expandTrueStyle01Padding,
  expandTrueStyle01Gap,
  expandTrueStyle01Background,
  expandTrueStyle01Height,
  expandTrueStyle01ZIndex,
  tinciduntDolorIdLetterSpacing,
  tinciduntDolorIdLineHeight,
  tinciduntDolorIdTextTransform,
  tinciduntDolorIdFontWeight,
  tinciduntDolorIdFontFamily,
  tinciduntDolorIdColor,
  tinciduntPurusAtFontSize,
  tinciduntPurusAtLetterSpacing,
  tinciduntPurusAtLineHeight,
  tinciduntPurusAtFontFamily,
  tinciduntPurusAtColor,
}) => {
  const expandTrueStyle01Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: expandTrueStyle01BackgroundColor,
      boxShadow: expandTrueStyle01BoxShadow,
      width: expandTrueStyle01Width,
      padding: expandTrueStyle01Padding,
      gap: expandTrueStyle01Gap,
      background: expandTrueStyle01Background,
      height: expandTrueStyle01Height,
      zIndex: expandTrueStyle01ZIndex,
    };
  }, [
    expandTrueStyle01BackgroundColor,
    expandTrueStyle01BoxShadow,
    expandTrueStyle01Width,
    expandTrueStyle01Padding,
    expandTrueStyle01Gap,
    expandTrueStyle01Background,
    expandTrueStyle01Height,
    expandTrueStyle01ZIndex,
  ]);

  const tinciduntDolorIdStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: tinciduntDolorIdLetterSpacing,
      lineHeight: tinciduntDolorIdLineHeight,
      textTransform: tinciduntDolorIdTextTransform,
      fontWeight: tinciduntDolorIdFontWeight,
      fontFamily: tinciduntDolorIdFontFamily,
      color: tinciduntDolorIdColor,
    };
  }, [
    tinciduntDolorIdLetterSpacing,
    tinciduntDolorIdLineHeight,
    tinciduntDolorIdTextTransform,
    tinciduntDolorIdFontWeight,
    tinciduntDolorIdFontFamily,
    tinciduntDolorIdColor,
  ]);

  const tinciduntPurusAtStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: tinciduntPurusAtFontSize,
      letterSpacing: tinciduntPurusAtLetterSpacing,
      lineHeight: tinciduntPurusAtLineHeight,
      fontFamily: tinciduntPurusAtFontFamily,
      color: tinciduntPurusAtColor,
    };
  }, [
    tinciduntPurusAtFontSize,
    tinciduntPurusAtLetterSpacing,
    tinciduntPurusAtLineHeight,
    tinciduntPurusAtFontFamily,
    tinciduntPurusAtColor,
  ]);

  return (
    <div
      className="bg-white shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.15)_inset] w-[550px] flex flex-col py-5 px-[15px] box-border items-center justify-start gap-[24px] text-left text-xl text-black font-inter"
      style={expandTrueStyle01Style}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
        <div
          className="flex-1 relative tracking-[0.2px] leading-[28px] capitalize font-medium"
          style={tinciduntDolorIdStyle}
        >
          {tinciduntDolorId}
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src={iconFeatherIcon}
        />
      </div>
      <div
        className="self-stretch relative text-base tracking-[0.2px] leading-[24px] text-systemgrey-600"
        style={tinciduntPurusAtStyle}
      >
        {tinciduntPurusAtAmetEuNis}
      </div>
    </div>
  );
};

export default ExpandTrueStyle01;
