/* eslint-disable */
import './logo.css'

const Logo = () => {
  // const logo = document.querySelectorAll(".Logo path");
  // for (let i = 0; i < logo.length; i++){
  //   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  // }
  return(
  <div className="svgLogo">
    <svg className="Logo" width="549" height="174" viewBox="0 0 549 174" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M119.116 169C113.783 169 107.983 168.133 101.716 166.4C95.5831 164.8 88.9831 162.333 81.9164 159L45.9164 141.4C36.3164 152.067 26.7164 157.4 17.1164 157.4C14.0497 157.4 11.3831 156.467 9.11639 154.6C6.98306 152.867 5.91641 150.533 5.91641 147.6C5.91641 141.6 9.5164 136.933 16.7164 133.6C20.1831 132 24.3164 131.2 29.1164 131.2C34.0497 131.2 38.9164 132 43.7164 133.6L44.3164 133.8C45.1164 132.333 45.9164 130.8 46.7164 129.2C47.5164 127.467 48.3164 125.733 49.1164 124C52.7164 115.333 56.1831 106.667 59.5164 98C62.9831 89.3333 66.5164 80.7333 70.1164 72.2C74.3831 61.9333 79.2497 52.8667 84.7164 45C90.3164 37.1333 96.2498 30.3333 102.516 24.6C108.25 19.5333 115.583 15.1333 124.516 11.4C133.583 7.66665 141.916 5.79999 149.516 5.79999C160.316 5.79999 165.716 9.93332 165.716 18.2C165.716 21.8 164.516 25.1333 162.116 28.2C159.45 31.2667 156.45 32.8 153.116 32.8C150.583 32.8 148.383 31.8667 146.516 30C144.783 28.1333 144.116 25.8667 144.516 23.2C145.316 17.0667 148.65 14 154.516 14C157.45 14 159.583 15.2667 160.916 17.8C160.516 13.2666 156.783 11 149.716 11C147.983 11 146.316 11.2 144.716 11.6C129.116 16 114.716 28.4667 101.516 49C98.1831 54.0667 93.3831 62.1333 87.1164 73.2C80.8498 84.2667 73.0497 98.3333 63.7164 115.4C59.3164 123.4 54.8497 130.267 50.3164 136C55.9164 138.267 61.5164 140.6 67.1164 143C72.7164 145.4 78.3831 147.733 84.1164 150C97.3164 155.2 108.25 157.8 116.916 157.8C119.583 157.8 122.116 157.533 124.516 157C127.05 156.6 129.45 156 131.716 155.2C137.183 153.2 141.85 150 145.716 145.6C149.45 141.333 151.316 136.933 151.316 132.4C151.316 125.6 146.783 120.667 137.716 117.6C136.25 117.067 134.65 116.667 132.916 116.4C131.316 116.133 129.583 116 127.716 116C121.583 116 115.25 117.333 108.716 120C104.583 121.733 100.65 124 96.9164 126.8C93.1831 129.467 89.6497 132.667 86.3164 136.4C85.7831 136.933 85.2497 137.2 84.7164 137.2C83.6497 137.2 83.1164 136.8 83.1164 136C83.1164 135.733 83.1831 135.533 83.3164 135.4C89.5831 126.333 97.2497 119.933 106.316 116.2C111.916 113.8 118.05 112.6 124.716 112.6C129.65 112.6 134.116 113.267 138.116 114.6C150.783 118.6 157.116 126.467 157.116 138.2C157.116 144.6 154.916 150.533 150.516 156C148.25 158.8 145.65 161.133 142.716 163C139.783 165 136.45 166.467 132.716 167.4C130.45 167.933 128.183 168.333 125.916 168.6C123.65 168.867 121.383 169 119.116 169ZM18.1164 153.4C26.1164 153.4 33.6497 148.667 40.7164 139.2C38.1831 138.267 35.7831 137.533 33.5164 137C31.2498 136.467 29.0497 136.133 26.9164 136C16.9164 136.133 11.5831 139.733 10.9164 146.8V147.4C10.9164 149 11.5164 150.333 12.7164 151.4C14.0497 152.733 15.8497 153.4 18.1164 153.4Z" stroke="#191919" stroke-width="5" mask="url(#path-1-outside-1_2_2)"/>
      <path d="M214.26 148.4C211.327 148.4 208.927 147.533 207.06 145.8C204.393 143.533 203.06 139.733 203.06 134.4C203.06 130.933 203.66 127 204.86 122.6C200.327 130.2 195.593 136.4 190.66 141.2C185.593 145.867 181.06 148.2 177.06 148.2C173.593 148.2 170.86 146.667 168.86 143.6C166.727 140.667 165.66 136.6 165.66 131.4C165.66 118.733 171.327 105.667 182.66 92.2C184.527 89.9333 186.66 87.8667 189.06 86C191.46 84.1333 194.06 82.4667 196.86 81C202.594 78.0667 208.127 76.6 213.46 76.6C219.994 76.6 225.193 78.7333 229.06 83C229.993 83.9333 230.46 85 230.46 86.2C230.46 88.4667 229.26 89.3333 226.86 88.8C225.527 84 222.393 81.6 217.46 81.6C211.86 81.6 205.26 85.5333 197.66 93.4C194.993 96.3333 192.46 99.4 190.06 102.6C187.66 105.667 185.393 108.933 183.26 112.4C177.527 122 174.66 129.8 174.66 135.8C174.66 140.333 176.394 142.6 179.86 142.6C183.727 142.6 188.193 139.667 193.26 133.8C196.06 130.6 198.927 126.667 201.86 122C204.794 117.333 207.86 111.933 211.06 105.8C212.393 103.267 213.593 101.2 214.66 99.6C215.727 98 216.593 96.8 217.26 96C219.393 93.8667 221.927 92.8667 224.86 93L228.86 93.6C230.594 94 232.06 94.0667 233.26 93.8C232.06 95 230.594 96.9333 228.86 99.6C227.26 102.133 225.393 105.467 223.26 109.6C220.993 114 219.127 118 217.66 121.6C216.193 125.2 215.193 128.4 214.66 131.2C214.393 132.533 214.193 133.8 214.06 135C213.927 136.067 213.86 137.067 213.86 138C213.86 141.467 214.793 143.2 216.66 143.2C219.327 143.2 222.993 140.267 227.66 134.4L228.46 133.4L231.26 135.2L230.46 136.4C224.993 144.4 219.593 148.4 214.26 148.4Z" stroke="#191919" stroke-width="5" mask="url(#path-1-outside-1_2_2)"/>
      <path d="M285.94 148.4C283.006 148.4 280.607 147.533 278.74 145.8C276.073 143.533 274.74 139.733 274.74 134.4C274.74 130.933 275.34 127 276.54 122.6C272.007 130.2 267.273 136.4 262.34 141.2C257.273 145.867 252.74 148.2 248.74 148.2C245.273 148.2 242.54 146.667 240.54 143.6C238.407 140.667 237.34 136.6 237.34 131.4C237.34 118.733 243.007 105.667 254.34 92.2C256.207 89.9333 258.34 87.8667 260.74 86C263.14 84.1333 265.74 82.4667 268.54 81C274.273 78.0667 279.806 76.6 285.14 76.6C291.673 76.6 296.873 78.7333 300.74 83C301.673 83.9333 302.14 85 302.14 86.2C302.14 88.4667 300.94 89.3333 298.54 88.8C297.207 84 294.073 81.6 289.14 81.6C283.54 81.6 276.94 85.5333 269.34 93.4C266.673 96.3333 264.14 99.4 261.74 102.6C259.34 105.667 257.073 108.933 254.94 112.4C249.206 122 246.34 129.8 246.34 135.8C246.34 140.333 248.073 142.6 251.54 142.6C255.407 142.6 259.873 139.667 264.94 133.8C267.74 130.6 270.607 126.667 273.54 122C276.473 117.333 279.54 111.933 282.74 105.8C284.073 103.267 285.273 101.2 286.34 99.6C287.407 98 288.273 96.8 288.94 96C291.073 93.8667 293.607 92.8667 296.54 93L300.54 93.6C302.273 94 303.74 94.0667 304.94 93.8C303.74 95 302.273 96.9333 300.54 99.6C298.94 102.133 297.073 105.467 294.94 109.6C292.673 114 290.807 118 289.34 121.6C287.873 125.2 286.873 128.4 286.34 131.2C286.073 132.533 285.873 133.8 285.74 135C285.607 136.067 285.54 137.067 285.54 138C285.54 141.467 286.473 143.2 288.34 143.2C291.007 143.2 294.673 140.267 299.34 134.4L300.14 133.4L302.94 135.2L302.14 136.4C296.673 144.4 291.273 148.4 285.94 148.4Z" stroke="#191919" stroke-width="5" mask="url(#path-1-outside-1_2_2)"/>
      <path d="M305.02 149.4C307.553 143 310.886 135 315.02 125.4C319.286 115.8 324.086 104.867 329.42 92.6C330.486 89.9333 331.486 87.8 332.42 86.2C333.486 84.6 334.42 83.3333 335.22 82.4C336.953 80.4 339.286 79.6 342.22 80L346.42 80.6C347.353 80.7333 348.153 80.8667 348.82 81C349.62 81 350.286 80.9333 350.82 80.8C348.153 82.1333 345.02 85.9333 341.42 92.2C337.953 98.3333 334.086 106.733 329.82 117.4C331.286 115.533 333.153 113.067 335.42 110C337.686 106.8 340.553 103.133 344.02 99C347.886 94.4667 351.886 90.2667 356.02 86.4C360.153 82.5333 364.153 80.6 368.02 80.6C371.086 80.6 373.286 81.6 374.62 83.6C375.953 85.6 376.62 87.8667 376.62 90.4C376.62 93.4667 375.42 96.2 373.02 98.6C370.62 101 368.286 102.2 366.02 102.2C365.086 102.2 364.086 102 363.02 101.6C362.086 101.2 361.62 100.6 361.62 99.8C361.62 99.1333 361.753 98.5333 362.02 98C362.286 97.3333 362.42 96.6 362.42 95.8C362.42 93.8 361.486 92.8 359.62 92.8C358.953 92.8 358.02 93 356.82 93.4C355.753 93.6667 354.286 94.7333 352.42 96.6C348.686 100.067 344.62 104.267 340.22 109.2C335.953 114 331.886 119.4 328.02 125.4C324.286 131.4 321.22 138 318.82 145.2C318.153 147.2 316.153 148.267 312.82 148.4C308.286 148.667 305.686 149 305.02 149.4Z" stroke="#191919" stroke-width="5" mask="url(#path-1-outside-1_2_2)"/>
      <path d="M416.604 148.4C413.671 148.4 411.271 147.533 409.404 145.8C406.737 143.533 405.404 139.733 405.404 134.4C405.404 130.933 406.004 127 407.204 122.6C402.671 130.2 397.937 136.4 393.004 141.2C387.937 145.867 383.404 148.2 379.404 148.2C375.937 148.2 373.204 146.667 371.204 143.6C369.071 140.667 368.004 136.6 368.004 131.4C368.004 118.733 373.671 105.667 385.004 92.2C386.871 89.9333 389.004 87.8667 391.404 86C393.804 84.1333 396.404 82.4667 399.204 81C404.937 78.0667 410.471 76.6 415.804 76.6C422.337 76.6 427.537 78.7333 431.404 83C432.337 83.9333 432.804 85 432.804 86.2C432.804 88.4667 431.604 89.3333 429.204 88.8C427.871 84 424.737 81.6 419.804 81.6C414.204 81.6 407.604 85.5333 400.004 93.4C397.337 96.3333 394.804 99.4 392.404 102.6C390.004 105.667 387.737 108.933 385.604 112.4C379.871 122 377.004 129.8 377.004 135.8C377.004 140.333 378.737 142.6 382.204 142.6C386.071 142.6 390.537 139.667 395.604 133.8C398.404 130.6 401.271 126.667 404.204 122C407.137 117.333 410.204 111.933 413.404 105.8C414.737 103.267 415.937 101.2 417.004 99.6C418.071 98 418.937 96.8 419.604 96C421.737 93.8667 424.271 92.8667 427.204 93L431.204 93.6C432.937 94 434.404 94.0667 435.604 93.8C434.404 95 432.937 96.9333 431.204 99.6C429.604 102.133 427.737 105.467 425.604 109.6C423.337 114 421.471 118 420.004 121.6C418.537 125.2 417.537 128.4 417.004 131.2C416.737 132.533 416.537 133.8 416.404 135C416.271 136.067 416.204 137.067 416.204 138C416.204 141.467 417.137 143.2 419.004 143.2C421.671 143.2 425.337 140.267 430.004 134.4L430.804 133.4L433.604 135.2L432.804 136.4C427.337 144.4 421.937 148.4 416.604 148.4Z" stroke="#191919" stroke-width="5" mask="url(#path-1-outside-1_2_2)"/>
      <path d="M458.684 148.4C447.217 148.4 441.484 143.2 441.484 132.8C441.484 130.533 442.017 127.4 443.084 123.4C444.284 119.4 445.75 114.933 447.484 110C449.35 104.933 451.35 99.8667 453.484 94.8C455.617 89.6 457.617 84.7333 459.484 80.2L479.284 33.2C479.55 32.1333 479.684 31.4 479.684 31C479.684 29 478.884 26.9333 477.284 24.8H488.284C491.884 24.8 493.684 25.6666 493.684 27.4C493.684 28.2 493.284 29.6 492.484 31.6C488.217 41.7333 482.884 54.4667 476.484 69.8C470.084 85 462.684 102.8 454.284 123.2C452.417 128 451.484 132.067 451.484 135.4C451.484 141.667 453.75 144.8 458.284 144.8C462.95 144.8 468.95 140.467 476.284 131.8C479.35 128.067 482.15 124.133 484.684 120C487.35 115.867 489.55 111.533 491.284 107C493.417 101.8 494.484 97 494.484 92.6C494.484 88.7333 493.55 86.0667 491.684 84.6C489.95 83 487.284 82.2 483.684 82.2H482.684C480.55 82.2 479.484 81.5333 479.484 80.2C479.484 78.7333 480.817 78 483.484 78C483.884 78 484.35 78 484.884 78C485.417 78 485.95 78.0667 486.484 78.2C497.684 79.8 503.284 86.8 503.284 99.2C503.284 108.933 500.017 118.533 493.484 128C484.15 141.6 472.55 148.4 458.684 148.4Z" stroke="#191919" stroke-width="5" mask="url(#path-1-outside-1_2_2)"/>
      <path d="M537.509 70.6C532.975 70.6 530.709 68.4 530.709 64C530.709 59.6 532.842 57.4 537.109 57.4C541.642 57.4 543.909 59.6 543.909 64C543.909 68.4 541.775 70.6 537.509 70.6ZM510.309 148C506.442 148 504.509 146.067 504.509 142.2C504.509 139.8 505.309 136.533 506.909 132.4C510.375 123.867 513.642 116 516.709 108.8C519.775 101.6 522.642 95.0667 525.309 89.2C525.709 88.5333 525.909 87.8 525.909 87C525.909 85.1333 525.042 83.1333 523.309 81L534.309 80.8C538.042 80.8 539.909 81.7333 539.909 83.6C539.909 84.1333 539.775 84.7333 539.509 85.4C539.242 85.9333 538.909 86.7333 538.509 87.8L520.109 130.4C518.242 134.8 517.309 138.533 517.309 141.6C517.309 144.8 518.309 146.933 520.309 148H510.309Z" stroke="#191919" stroke-width="5" mask="url(#path-1-outside-1_2_2)"/>
  </svg>
</div>

)};

export default Logo;