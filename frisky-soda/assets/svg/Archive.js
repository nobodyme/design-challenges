import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SvgComponent(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 14.667v8.666c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H10c-2.828 0-4.243 0-5.121-.878C4 27.575 4 26.162 4 23.333v-8.666c0 1.885 0 2.828.586 3.414.586.586 1.528.586 3.414.586h1.225c.696 0 1.044 0 1.306.188.261.19.371.52.591 1.18l.422 1.264c.22.66.33.99.592 1.179.262.189.61.189 1.306.189h5.116c.696 0 1.044 0 1.306-.19.262-.188.372-.518.592-1.178l.422-1.265c.22-.66.33-.99.591-1.179.262-.188.61-.188 1.306-.188H24c1.886 0 2.828 0 3.414-.586.586-.586.586-1.529.586-3.414z"
        fill="#818899"
      />
      <Path
        d="M21.333 8H22c2.828 0 4.243 0 5.121.879C28 9.757 28 11.172 28 14v9.333c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H10c-2.828 0-4.243 0-5.121-.878C4 27.576 4 26.162 4 23.333V14c0-2.828 0-4.243.879-5.121C5.757 8 7.172 8 10 8h.667"
        stroke="#818899"
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <Path
        d="M10.667 13.333l5.333 4m0 0l5.333-4m-5.333 4V4"
        stroke="#818899"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}