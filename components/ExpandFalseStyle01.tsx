import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ExpandFalseStyle01Type = {
  supportDescription?: string;
  imageDescription?: string;

  /** Style props */
  expandFalseStyle01BackgroundColor?: CSSProperties["backgroundColor"];
  expandFalseStyle01BoxShadow?: CSSProperties["boxShadow"];
  expandFalseStyle01Width?: CSSProperties["width"];
  expandFalseStyle01Padding?: CSSProperties["padding"];
  expandFalseStyle01Background?: CSSProperties["background"];
  expandFalseStyle01ZIndex?: CSSProperties["zIndex"];
  adipiscingLetterSpacing?: CSSProperties["letterSpacing"];
  adipiscingLineHeight?: CSSProperties["lineHeight"];
  adipiscingTextTransform?: CSSProperties["textTransform"];
  adipiscingFontWeight?: CSSProperties["fontWeight"];
  adipiscingFontFamily?: CSSProperties["fontFamily"];
  adipiscingColor?: CSSProperties["color"];
};

const ExpandFalseStyle01: NextPage<ExpandFalseStyle01Type> = ({
  supportDescription,
  imageDescription,
  expandFalseStyle01BackgroundColor,
  expandFalseStyle01BoxShadow,
  expandFalseStyle01Width,
  expandFalseStyle01Padding,
  expandFalseStyle01Background,
  expandFalseStyle01ZIndex,
  adipiscingLetterSpacing,
  adipiscingLineHeight,
  adipiscingTextTransform,
  adipiscingFontWeight,
  adipiscingFontFamily,
  adipiscingColor,
}) => {
  const expandFalseStyle01Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: expandFalseStyle01BackgroundColor,
      boxShadow: expandFalseStyle01BoxShadow,
      width: expandFalseStyle01Width,
      padding: expandFalseStyle01Padding,
      background: expandFalseStyle01Background,
      zIndex: expandFalseStyle01ZIndex,
    };
  }, [
    expandFalseStyle01BackgroundColor,
    expandFalseStyle01BoxShadow,
    expandFalseStyle01Width,
    expandFalseStyle01Padding,
    expandFalseStyle01Background,
    expandFalseStyle01ZIndex,
  ]);

  const adipiscingStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: adipiscingLetterSpacing,
      lineHeight: adipiscingLineHeight,
      textTransform: adipiscingTextTransform,
      fontWeight: adipiscingFontWeight,
      fontFamily: adipiscingFontFamily,
      color: adipiscingColor,
    };
  }, [
    adipiscingLetterSpacing,
    adipiscingLineHeight,
    adipiscingTextTransform,
    adipiscingFontWeight,
    adipiscingFontFamily,
    adipiscingColor,
  ]);

  return (
    <div
      className="bg-white shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.15)_inset] w-[550px] flex flex-row py-5 px-[15px] box-border items-center justify-between text-left text-xl text-black font-inter"
      style={expandFalseStyle01Style}
    >
      <div
        className="relative tracking-[0.2px] leading-[28px] capitalize font-medium"
        style={adipiscingStyle}
      >
        {supportDescription}
      </div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
        alt=""
        src={imageDescription}
      />
    </div>
  );
};

export default ExpandFalseStyle01;
