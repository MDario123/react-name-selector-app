import styles from "./MaybeButton.module.css";

export function MaybeButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={"cardButton but " + styles.maybe} onClick={onClick}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        enableBackground="new 0 0 24 24"
        className="buttonIcon"
      >
        <g>
          <g>
            <g>
              <path
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M21.3,13"
              />
            </g>
          </g>
          <g>
            <g>
              <path d="M20,13c-0.6,0-1-0.4-1-1c0-3.9-3.1-7-7-7c-1.9,0-3.6,0.7-5,2C6.7,7.4,6,7.4,5.6,7c-0.4-0.4-0.4-1,0-1.4 C7.3,3.9,9.6,3,12,3c5,0,9,4,9,9C21,12.6,20.6,13,20,13z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M12,21c-5,0-9-4-9-9c0-0.6,0.4-1,1-1s1,0.4,1,1c0,3.9,3.1,7,7,7c1.9,0,3.6-0.7,5-2c0.4-0.4,1-0.4,1.4,0 c0.4,0.4,0.4,1,0,1.4C16.7,20.1,14.4,21,12,21z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M20,13c-0.2,0-0.4-0.1-0.6-0.2L16,10.3c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.4,2.5c0.4,0.3,0.5,1,0.2,1.4 C20.6,12.9,20.3,13,20,13z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M20,13c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.3-0.5-1-0.2-1.4L21.7,8c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4l-2.5,3.4 C20.6,12.9,20.3,13,20,13z" />
            </g>
          </g>
          <g>
            <g>
              <path
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M2.7,11"
              />
            </g>
          </g>
          <g>
            <g>
              <path d="M7.4,15.5c-0.2,0-0.4-0.1-0.6-0.2l-3.4-2.5c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,0.9-0.5,1.4-0.2L8,13.7 c0.4,0.3,0.5,1,0.2,1.4C8,15.4,7.7,15.5,7.4,15.5z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M1.5,16.4c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.3-0.5-1-0.2-1.4l2.5-3.4c0.3-0.4,0.9-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4L2.3,16 C2.1,16.3,1.8,16.4,1.5,16.4z" />
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
}
