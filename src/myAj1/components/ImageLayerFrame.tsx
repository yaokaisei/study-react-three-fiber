import React, { forwardRef, useEffect, useState } from 'react';

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 1200;
const CANVAS_TEXT = 'NOT FOR SALE | MAEK BY @AIR JORDAN DESIGN';
const BG_COLOR = '#232323';
const FONT_SIZE = 16;
const FONT_COLOR = '#d9d9d9';
const FONT_FAMILY = 'Arial, meiryo, sans-serif';

/**
 * 二次元描画コンテキストの背景色を描画
 */
const drowBgColor = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = BG_COLOR;
};

/**
 * 二次元描画コンテキストに表示するテキストを描画
 * @NOTE 描画位置は固定値
 */
const drawText = (ctx: CanvasRenderingContext2D) => {
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_WIDTH);
  ctx.font = `italic ${FONT_SIZE}px ${FONT_FAMILY}`;
  ctx.fillStyle = FONT_COLOR;

  const { width } = ctx.measureText(CANVAS_TEXT); // NOTE: テキストの幅を取得
  ctx.fillText(CANVAS_TEXT, (CANVAS_WIDTH - width) / 2, 1180); // NOTE: テキストの配置を定義
};

/**
 * 二次元描画コンテキストに表示する画像を描画
 * @NOTE レイヤーに対して表示する画像サイズは固定
 */
const drowImage = (
  ctx: CanvasRenderingContext2D,
  imagePath: string,
  callback: () => void,
) => {
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    callback();
  };

  img.src = imagePath;
};

interface ImageLayerFrameProps {
  /**
   * レイヤーを重ねたい画像パス
   */
  imagePath: string;
  /**
   * レイヤーを重ねて生成した新しい画像をBase64形式でセット
   */
  setDataUrl: (url: string) => void;
}

export const ImageLayerFrame: React.FC<ImageLayerFrameProps> = ({
  imagePath,
  setDataUrl,
}) => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const canvasElem = document.createElement('canvas');
    canvasElem.width = CANVAS_WIDTH;
    canvasElem.height = CANVAS_HEIGHT;
    const canvasContext = canvasElem.getContext('2d');
    const ctx = canvasElem && canvasContext;

    if (!canvasElem || !ctx) return;

    drowBgColor(ctx);
    drawText(ctx);
    drowImage(ctx, imagePath, () => {
      setImgSrc(canvasElem.toDataURL());
      setDataUrl(canvasElem.toDataURL());
    });
  });

  return <img src={imgSrc} alt="" />;
};
