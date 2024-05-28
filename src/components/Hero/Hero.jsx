import "./hero.css";
import WaveCircles from "../../path/WaveCircle";
import SVGMorph from "../../path/SVGMorph"

export default function Hero() {
  return (
    <div className="Hero_Container">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1422 800" className="back_image">
        <defs>
          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#989898" />
            <stop offset="100%" stopColor="#3C3C6E" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#a)" strokeLinecap="round" strokeWidth={2}>
          <SVGMorph paths={["M0 572q355.5-392 711-172t711 172", "M0 884Q355.5-5 711 400t711 484", "M0 572q355.5-392 711-172t711 172"]} opacity={1}/> 
          <SVGMorph paths={["M0 550q355.5-370 711-150t711 150", "M0 850Q355.5-5 711 400t711 450", "M0 550q355.5-370 711-150t711 150"]} opacity={0.96}/> 
          </g>
        </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        className="back_image"
        >
        <g fill="none">
          <WaveCircles
            circles={[
              { cx: 513, cy: 131, r: 350, opacity: 0.02 },
              { cx: 503.583, cy: 153.417, r: 333.333, opacity: 0.102 },
              { cx: 494.167, cy: 175.833, r: 316.667, opacity: 0.183 },
              { cx: 484.75, cy: 198.25, r: 300, opacity: 0.265 },
              { cx: 475.333, cy: 220.667, r: 283.333, opacity: 0.347 },
              { cx: 465.917, cy: 243.083, r: 266.667, opacity: 0.428 },
              { cx: 456.5, cy: 265.5, r: 250, opacity: 0.51 },
              { cx: 447.083, cy: 287.917, r: 233.333, opacity: 0.592 },
              { cx: 437.667, cy: 310.333, r: 216.667, opacity: 0.673 },
              { cx: 428.25, cy: 332.75, r: 200, opacity: 0.755 },
              { cx: 418.833, cy: 355.167, r: 183.333, opacity: 0.837 },
              { cx: 409.417, cy: 377.583, r: 166.667, opacity: 0.918 },
              { cx: 400, cy: 400, r: 150, opacity: 1 },
            ]}
          />
          <WaveCircles
            circles={[
              { cx: 503.583, cy: 153.417, r: 333.333, opacity: 0.102 },
              { cx: 494.167, cy: 175.833, r: 316.667, opacity: 0.183 },
              { cx: 484.75, cy: 198.25, r: 300, opacity: 0.265 },
              { cx: 475.333, cy: 220.667, r: 283.333, opacity: 0.347 },
              { cx: 465.917, cy: 243.083, r: 266.667, opacity: 0.428 },
              { cx: 456.5, cy: 265.5, r: 250, opacity: 0.51 },
              { cx: 447.083, cy: 287.917, r: 233.333, opacity: 0.592 },
              { cx: 437.667, cy: 310.333, r: 216.667, opacity: 0.673 },
              { cx: 428.25, cy: 332.75, r: 200, opacity: 0.755 },
              { cx: 418.833, cy: 355.167, r: 183.333, opacity: 0.837 },
              { cx: 409.417, cy: 377.583, r: 166.667, opacity: 0.918 },
              { cx: 400, cy: 400, r: 150, opacity: 1 },
              { cx: 513, cy: 131, r: 350, opacity: 0.02 },
            ]}
          />
          <WaveCircles
            circles={[
              { cx: 494.167, cy: 175.833, r: 316.667, opacity: 0.183 },
              { cx: 484.75, cy: 198.25, r: 300, opacity: 0.265 },
              { cx: 475.333, cy: 220.667, r: 283.333, opacity: 0.347 },
              { cx: 465.917, cy: 243.083, r: 266.667, opacity: 0.428 },
              { cx: 456.5, cy: 265.5, r: 250, opacity: 0.51 },
              { cx: 447.083, cy: 287.917, r: 233.333, opacity: 0.592 },
              { cx: 437.667, cy: 310.333, r: 216.667, opacity: 0.673 },
              { cx: 428.25, cy: 332.75, r: 200, opacity: 0.755 },
              { cx: 418.833, cy: 355.167, r: 183.333, opacity: 0.837 },
              { cx: 409.417, cy: 377.583, r: 166.667, opacity: 0.918 },
              { cx: 400, cy: 400, r: 150, opacity: 1 },
              { cx: 513, cy: 131, r: 350, opacity: 0.02 },
              { cx: 503.583, cy: 153.417, r: 333.333, opacity: 0.102 },
            ]}
          />
          <WaveCircles
            circles={[

              { cx: 484.75, cy: 198.25, r: 300, opacity: 0.265 },
              { cx: 475.333, cy: 220.667, r: 283.333, opacity: 0.347 },
              { cx: 465.917, cy: 243.083, r: 266.667, opacity: 0.428 },
              { cx: 456.5, cy: 265.5, r: 250, opacity: 0.51 },
              { cx: 447.083, cy: 287.917, r: 233.333, opacity: 0.592 },
              { cx: 437.667, cy: 310.333, r: 216.667, opacity: 0.673 },
              { cx: 428.25, cy: 332.75, r: 200, opacity: 0.755 },
              { cx: 418.833, cy: 355.167, r: 183.333, opacity: 0.837 },
              { cx: 409.417, cy: 377.583, r: 166.667, opacity: 0.918 },
              { cx: 400, cy: 400, r: 150, opacity: 1 },
              { cx: 513, cy: 131, r: 350, opacity: 0.02 },
              { cx: 503.583, cy: 153.417, r: 333.333, opacity: 0.102 },
              { cx: 494.167, cy: 175.833, r: 316.667, opacity: 0.183 },
            ]}
          />
          <WaveCircles
            circles={[
              { cx: 475.333, cy: 220.667, r: 283.333, opacity: 0.347 },
              { cx: 465.917, cy: 243.083, r: 266.667, opacity: 0.428 },
              { cx: 456.5, cy: 265.5, r: 250, opacity: 0.51 },
              { cx: 447.083, cy: 287.917, r: 233.333, opacity: 0.592 },
              { cx: 437.667, cy: 310.333, r: 216.667, opacity: 0.673 },
              { cx: 428.25, cy: 332.75, r: 200, opacity: 0.755 },
              { cx: 418.833, cy: 355.167, r: 183.333, opacity: 0.837 },
              { cx: 409.417, cy: 377.583, r: 166.667, opacity: 0.918 },
              { cx: 400, cy: 400, r: 150, opacity: 1 },
              { cx: 513, cy: 131, r: 350, opacity: 0.02 },
              { cx: 503.583, cy: 153.417, r: 333.333, opacity: 0.102 },
              { cx: 494.167, cy: 175.833, r: 316.667, opacity: 0.183 },
              { cx: 484.75, cy: 198.25, r: 300, opacity: 0.265 },
            ]}
          />
          <WaveCircles
            circles={[


              { cx: 465.917, cy: 243.083, r: 266.667, opacity: 0.428 },
              { cx: 456.5, cy: 265.5, r: 250, opacity: 0.51 },
              { cx: 447.083, cy: 287.917, r: 233.333, opacity: 0.592 },
              { cx: 437.667, cy: 310.333, r: 216.667, opacity: 0.673 },
              { cx: 428.25, cy: 332.75, r: 200, opacity: 0.755 },
              { cx: 418.833, cy: 355.167, r: 183.333, opacity: 0.837 },
              { cx: 409.417, cy: 377.583, r: 166.667, opacity: 0.918 },
              { cx: 400, cy: 400, r: 150, opacity: 1 },
              { cx: 513, cy: 131, r: 350, opacity: 0.02 },
              { cx: 503.583, cy: 153.417, r: 333.333, opacity: 0.102 },
              { cx: 494.167, cy: 175.833, r: 316.667, opacity: 0.183 },
              { cx: 484.75, cy: 198.25, r: 300, opacity: 0.265 },
              { cx: 475.333, cy: 220.667, r: 283.333, opacity: 0.347 },
            ]}
          />
          <WaveCircles
            circles={[
              { cx: 456.5, cy: 265.5, r: 250, opacity: 0.51 },
              { cx: 447.083, cy: 287.917, r: 233.333, opacity: 0.592 },
              { cx: 437.667, cy: 310.333, r: 216.667, opacity: 0.673 },
              { cx: 428.25, cy: 332.75, r: 200, opacity: 0.755 },
              { cx: 418.833, cy: 355.167, r: 183.333, opacity: 0.837 },
              { cx: 409.417, cy: 377.583, r: 166.667, opacity: 0.918 },
              { cx: 400, cy: 400, r: 150, opacity: 1 },
              { cx: 513, cy: 131, r: 350, opacity: 0.02 },
              { cx: 503.583, cy: 153.417, r: 333.333, opacity: 0.102 },
              { cx: 494.167, cy: 175.833, r: 316.667, opacity: 0.183 },
              { cx: 484.75, cy: 198.25, r: 300, opacity: 0.265 },
              { cx: 475.333, cy: 220.667, r: 283.333, opacity: 0.347 },
              { cx: 465.917, cy: 243.083, r: 266.667, opacity: 0.428 },
            ]}
          />
          <WaveCircles
            circles={[
              { cx: 447.083, cy: 287.917, r: 233.333, opacity: 0.592 },
              { cx: 437.667, cy: 310.333, r: 216.667, opacity: 0.673 },
              { cx: 428.25, cy: 332.75, r: 200, opacity: 0.755 },
              { cx: 418.833, cy: 355.167, r: 183.333, opacity: 0.837 },
              { cx: 409.417, cy: 377.583, r: 166.667, opacity: 0.918 },
              { cx: 400, cy: 400, r: 150, opacity: 1 },
              { cx: 513, cy: 131, r: 350, opacity: 0.02 },
              { cx: 503.583, cy: 153.417, r: 333.333, opacity: 0.102 },
              { cx: 494.167, cy: 175.833, r: 316.667, opacity: 0.183 },
              { cx: 484.75, cy: 198.25, r: 300, opacity: 0.265 },
              { cx: 475.333, cy: 220.667, r: 283.333, opacity: 0.347 },
              { cx: 465.917, cy: 243.083, r: 266.667, opacity: 0.428 },
              { cx: 456.5, cy: 265.5, r: 250, opacity: 0.51 },
            ]}
          />
        </g>
      </svg>
    </div>
  );
}
