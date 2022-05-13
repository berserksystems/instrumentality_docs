import React from 'react';

export function Theme() {
  const [theme, setTheme] = React.useState(undefined);

  React.useEffect(() => {
    setTheme('dark');
  }, []);

  React.useEffect(() => {
    if (theme) {
      document.body.className = theme;
    }
  }, [theme]);

  return (
    <div>
      <style jsx>
        {`
          button {
            display: flex;
            gap: 8px;
            align-items: center;
            justify-content: center;
            width: 120px;
            font-size: 15px;
            line-height: 27px;
            font-weight: 400;
            border-radius: 3px;
            white-space: nowrap;
          }

          .dark {
            background: var(--contrast-dark);
            color: var(--white);
          }

          .light {
            background: var(--gray-light);
            color: var(--black);
          }

          button:active :global(svg) {
            animation: rotate 150ms linear forwards;
          }

          button :global(.sun) {
            animation: sun 400ms ease both;
          }

          button :global(.moon) {
            animation: moon 400ms ease both;
          }

          button :global(circle.ray) {
            transform-origin: center;
            animation: rays 400ms ease both;
          }

          @keyframes rotate {
            from {
              transform: initial;
            }
            to {
              transform: scale(0.95) rotate(20deg);
            }
          }

          @keyframes sun {
            from {
              transform: scale(1.5);
            }
            to {
              transform: scale(1);
            }
          }

          @keyframes rays {
            from {
              transform: rotate(45deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          @keyframes moon {
            from {
              transform: scale(0.6) rotate(90deg);
            }
            to {
              transform: scale(1) rotate(0deg);
            }
          }

          @media screen and (max-width: 600px) {
            button {
              width: 130px;
            }
          }
        `}
      </style>
    </div>
  );
}
