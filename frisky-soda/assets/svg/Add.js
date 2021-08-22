import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Add(props) {
  return (
    <Svg
      width={52}
      height={52}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 6a1 1 0 01-1-1v-4H7a1 1 0 110-2h4V7a1 1 0 112 0v4h4a1 1 0 110 2h-4v4a1 1 0 01-1 1z"
        fill="#2A2F3D"
      />
    </Svg>
  )
}
