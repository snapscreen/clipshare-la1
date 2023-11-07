import * as React from "react";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Layout } from "../components/layout";

interface PageProps {
}

const Home: React.FC<PageProps> = () => {
  const siteTitle = `LA1 ClipShare`;

  function fetchAccessTokenFromApi() {
      return fetch('/api/token', { mode: 'cors', cache: 'no-cache' }).then((response) => response.json());
  }

  const startClipShare = () => {
      SnapoddsSdk.clipShareBuilder()
          .setLanguage('en')
          .setSnapTarget('sport')
          .setAction('share')
          .setVibrate(true)
          .setApiUrl(`https://api.us.snapscreen.com`)
          .setClipShareApiUrl(`https://clip.us.snapscreen.com/api`)
          .setAccessTokenProvider(fetchAccessTokenFromApi)
          .onClipCreated((clip) => console.log('Clip shared', clip))
          .onClose(() => console.log('SDK:onClose'))
          .appendTo(document.body);
  };

  return (
    <Layout title={siteTitle}>
        <article className="prose prose-lg my-8 text-center mx-auto">
          <h1 className="sr-only"></h1>
          <p className="lead">Share your broadcast quality TV clip created with ClipShare.</p>
          <h2 className="text-2xl mb-3">Instructions</h2>
          <ol className="list-none flex flex-col gap-1 p-0 m-0">
            <li className="m-0 p-0">Tap the “Snap TV” button.</li>
            <li className="m-0 p-0">Take a photo of the full TV picture.</li>
          </ol>
          <figure>
            <figcaption className="sr-only">Aim and focus on TV screen and take a picture.</figcaption>
            <svg width="318" height="193" viewBox="0 0 318 193" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M153.317 53.6879L313.25 66.8311L313.427 126.413L91.806 81.2885L153.317 53.6879Z" fill="var(--color-background-muted)"/>
            <path d="M196.774 71.6513L199.332 7.87827L302.124 9.05479L300.578 80.9684L196.774 71.6513Z" fill="var(--color-focus)" stroke="black" stroke-width="4"/>
            <path d="M283.463 81.0429L210.286 74.6232L210.42 78.3455L283.635 85.8287L289.484 85.6184L289.312 80.8325L283.463 81.0429Z" fill="black" stroke="#050505"/>
            <path d="M302.959 82.0751L304.712 7.88319L306.707 8.87996L305.322 80.5053L302.959 82.0751Z" fill="black" stroke="#050505"/>
            <g clip-path="url(#clip0_542_328)">
            <path d="M67.582 191.58L128.632 192.52L132.382 177.59L135.682 154.56L138.062 141.3L138.312 132.12L135.762 127.23L130.092 113.48L124.772 97.8602L120.722 89.3002L120.072 87.3002L121.852 79.1002L122.412 75.7602C122.412 75.7602 121.372 71.9202 119.222 71.6102C117.072 71.3002 109.702 73.0602 109.702 73.0602C109.702 73.0602 101.242 78.3202 99.662 79.8102C98.082 81.3002 94.642 89.4902 94.642 89.4902L91.442 99.2402L91.052 106.62L90.572 111.81V121.81L89.392 128.88L26.7719 83.4902L22.6119 81.5202L20.5119 81.8302C20.5119 81.8302 19.5419 82.1902 19.5619 83.5002C19.5819 84.8102 20.622 87.0802 20.622 87.0802L21.6019 90.9302L24.3219 94.4102L22.452 119.01L3.84195 121.52C3.84195 121.52 -0.55805 122.19 1.51195 125.5C3.58195 128.81 7.58195 132.81 7.58195 132.81C7.58195 132.81 10.7519 135.02 13.1719 135.92C15.5919 136.82 18.7919 137.56 20.1819 136.69C21.5719 135.82 31.5819 133.82 31.5819 133.82L31.132 147.29L29.292 152.63L26.882 155.52L17.9019 162.61C17.9019 162.61 16.2319 165.24 17.9019 166.53C19.5719 167.82 23.712 169.7 23.712 169.7C23.712 169.7 27.8819 171.98 30.7319 170.9C33.5819 169.82 37.742 166.91 37.742 166.91L45.0319 169.22L53.242 170.31L59.1419 173.53L64.632 177.05C64.632 177.05 66.832 182.91 68.202 183.86C69.572 184.81 67.582 191.6 67.582 191.6V191.58Z" fill="#EFB379"/>
            <path d="M138.322 132.12V131.55C137.432 129.63 136.582 127.69 135.632 125.8C134.902 124.35 133.882 123.04 133.282 121.55C131.542 117.24 129.812 112.91 128.322 108.5C126.132 102.05 124.382 95.4302 121.092 89.4002C120.552 88.4102 120.482 87.4702 120.682 86.4102C121.242 83.5502 121.752 80.6902 122.282 77.8202C123.082 73.5202 120.582 70.8002 116.302 71.4802C114.182 71.8102 112.102 72.4602 110.002 72.9702C109.582 73.0702 109.182 73.2102 108.652 73.3602C108.672 72.9302 108.682 72.6802 108.702 72.4402C109.252 64.8002 109.802 57.1602 110.352 49.5202C110.812 43.2502 111.302 36.9802 111.752 30.7102C112.052 26.5202 112.492 22.3202 112.512 18.1202C112.542 13.0702 110.572 8.88022 106.092 6.17022C103.422 4.56022 100.432 4.01022 97.382 3.81022C82.882 2.86022 68.382 1.95022 53.892 1.00022C51.112 0.820222 48.352 0.530222 45.582 0.290222H42.832C42.322 0.450222 41.812 0.620222 41.292 0.750222C35.102 2.30022 31.102 6.83022 30.552 13.1702C29.962 19.9702 29.522 26.7902 28.982 33.6002C28.292 42.2802 27.562 50.9502 26.842 59.6302C26.152 67.8002 25.452 75.9802 24.742 84.1502C23.782 95.1902 22.802 106.22 21.872 117.26C21.802 118.12 21.562 118.5 20.692 118.64C15.072 119.57 9.46196 120.59 3.84196 121.51C1.10196 121.96 0.191962 123.64 1.57196 126.04C2.11196 126.98 2.75196 127.85 3.31196 128.78C6.08196 133.34 10.122 135.99 15.362 136.82C16.902 137.06 18.482 137.08 20.072 137.2C20.192 144.14 22.932 149.36 29.652 151.88C28.552 154.52 26.402 155.97 24.232 157.48C21.962 159.07 19.762 160.82 17.762 162.73C16.362 164.07 17.082 166.34 18.842 167.15C19.462 167.44 20.082 167.79 20.612 168.23C24.792 171.72 29.422 172.19 34.152 169.45C35.442 168.7 36.592 167.73 37.762 166.89C42.782 168.67 47.822 170.35 53.262 170.29C53.482 170.29 53.762 170.37 53.922 170.52C56.802 173.14 60.292 174.73 63.722 176.42C64.662 176.88 65.202 177.38 65.352 178.48C65.632 180.6 66.482 182.46 68.232 183.84C68.452 184.01 68.562 184.49 68.522 184.79C68.302 186.48 68.022 188.17 67.772 189.85C67.692 190.38 67.672 190.91 67.612 191.57C67.882 191.41 67.992 191.38 68.012 191.33C68.082 191.05 68.152 190.77 68.192 190.48C69.462 181.48 71.362 172.63 74.162 163.98C76.732 156.07 79.832 148.37 85.032 141.79C87.002 139.3 88.312 136.78 88.592 133.67C88.632 133.26 88.722 132.85 88.802 132.44C89.992 125.89 91.102 119.35 90.952 112.63C90.812 106.08 91.632 99.5802 93.442 93.2602C95.122 87.4102 97.682 82.0502 102.342 77.9202C104.212 76.2702 106.282 74.9402 108.882 73.9902C108.612 74.6002 108.432 74.9602 108.282 75.3302C107.002 78.6202 105.502 81.8402 104.512 85.2202C103.172 89.8302 104.882 92.2402 109.652 92.8302C111.872 93.1002 114.132 93.0102 116.372 93.1102C117.242 93.1502 117.722 92.8202 118.022 91.9702C118.572 90.4202 119.242 88.9102 119.852 87.3802C118.202 96.4602 116.732 105.52 115.932 114.69C115.312 121.84 114.972 128.99 116.102 136.12C116.792 140.51 118.152 144.57 121.572 147.74C123.362 149.39 124.522 151.54 125.292 153.88C125.372 154.11 125.532 154.32 125.662 154.54L125.942 154.43C125.842 153.97 125.792 153.49 125.632 153.05C124.702 150.55 123.212 148.4 121.312 146.55C119.852 145.12 118.812 143.46 118.112 141.55C116.132 136.12 115.932 130.46 116.002 124.79C116.132 114.78 117.462 104.88 119.192 95.0302C119.522 93.1402 119.922 91.2602 120.282 89.3802L120.742 89.3002C122.262 93.1102 123.962 96.8702 125.262 100.76C128.282 109.78 130.732 119 135.782 127.23C136.832 128.93 137.372 130.94 138.072 132.86C138.032 135.59 137.862 140.99 137.062 143.43C135.992 150.2 135.062 157 134.022 163.78C133.272 168.71 132.532 173.64 131.602 178.54C130.782 182.86 129.692 187.14 128.732 191.44C128.652 191.79 128.672 192.16 128.642 192.53C128.962 192.47 129.052 192.39 129.072 192.3C130.242 187.15 131.672 182.04 132.522 176.84C133.982 167.89 135.022 158.87 136.372 149.91C136.812 147.01 137.412 144.18 138.082 141.31C138.492 135.25 138.452 133.01 138.332 132.13L138.322 132.12ZM20.102 136.32C14.142 137.91 7.31196 134.06 2.73196 126.85C3.12196 123.61 4.85196 122.25 8.15196 122.61C5.79196 121.12 3.46196 122.61 1.91196 125.92C1.78196 125.13 1.31196 124.16 1.60196 123.59C1.95196 122.91 2.90196 122.28 3.68196 122.14C7.20196 121.52 10.762 121.15 14.292 120.56C16.662 120.17 18.992 119.56 21.602 119C21.092 124.89 20.592 130.62 20.102 136.31V136.32ZM68.292 183.26C66.262 181.3 65.342 178.86 65.752 176.1C66.392 171.8 68.532 168.22 71.552 165.14C71.812 164.88 72.032 164.59 72.092 164.16C70.102 165.58 68.522 167.41 67.462 169.59C66.422 171.74 65.652 174.02 64.712 176.37C61.352 174.73 57.782 173.06 54.712 170.54C54.412 170.29 54.222 169.67 54.272 169.26C54.482 167.19 54.792 165.13 55.052 163.07C55.112 162.59 55.102 162.11 55.122 161.62L54.712 161.56C54.272 164.29 53.832 167.02 53.382 169.83C48.012 169.73 43.262 168.32 38.292 166.57C40.052 165.39 40.902 163.91 41.242 162.14C41.572 160.47 41.662 158.8 41.232 157.15L40.882 157.12C40.862 157.52 40.832 157.92 40.802 158.32C40.692 159.81 40.712 161.32 40.422 162.77C40.132 164.19 39.252 165.32 37.892 166.01C37.492 166.21 37.192 166.6 36.812 166.83C34.942 167.97 33.172 169.39 31.162 170.15C27.432 171.56 24.062 170.38 21.052 167.95C20.422 167.45 19.712 167.02 18.992 166.66C17.592 165.96 17.012 164.12 18.142 163.04C19.942 161.33 21.932 159.81 23.882 158.26C24.862 157.49 25.912 156.8 26.982 156.17C27.292 155.99 27.942 155.97 28.172 156.17C28.392 156.36 28.362 156.97 28.252 157.35C28.182 157.62 27.822 157.84 27.562 158.03C26.492 158.82 25.402 159.59 24.322 160.38C23.552 160.95 22.822 161.37 21.752 161.39C19.782 161.42 18.472 163.46 19.102 165.54C19.192 165.23 19.292 164.93 19.362 164.62C19.772 162.66 20.512 162.07 22.522 162.01C22.902 162 23.332 161.83 23.652 161.61C25.122 160.59 26.572 159.53 28.012 158.47C29.412 157.44 29.452 156.4 28.172 155.24C28.172 155.2 28.172 155.16 28.202 155.13C30.082 152.29 30.062 152.4 33.352 152.88C40.142 153.86 46.952 154.73 53.752 155.61C58.452 156.22 63.192 156.63 67.862 157.43C69.502 157.71 71.002 158.89 72.562 159.64C72.972 159.84 73.402 160.01 73.822 160.19C73.892 160.05 73.962 159.92 74.032 159.78C72.832 159.12 71.642 158.45 70.442 157.79L70.492 157.63C72.072 157.82 73.652 158 75.072 158.17C72.812 166.51 70.552 174.84 68.262 183.27L68.292 183.26ZM105.712 20.9002C105.092 31.6302 104.442 42.3502 103.792 53.0802C103.322 60.8502 102.842 68.6302 102.342 76.4002C102.312 76.8102 102.132 77.3202 101.842 77.5802C96.612 82.3502 93.972 88.5302 92.322 95.2202C91.022 100.5 90.272 105.89 90.382 111.3C90.542 118.94 89.372 126.39 87.952 133.84C87.902 134.13 87.832 134.41 87.802 134.7C87.562 136.94 86.752 138.83 85.222 140.6C82.312 143.94 80.212 147.85 78.312 151.84C78.132 152.21 77.932 152.57 77.732 152.97C69.122 152.11 60.542 151.26 51.982 150.4C47.012 149.9 42.052 149.23 37.072 148.89C31.052 148.48 27.132 145.28 24.612 140.06C22.982 136.68 22.152 133.21 22.552 129.33C23.792 117.36 24.782 105.37 25.872 93.3902C26.962 81.4502 28.052 69.5102 29.142 57.5702C30.232 45.6302 31.362 33.6902 32.392 21.7502C32.672 18.4702 32.722 15.1802 33.882 12.0402C35.662 7.23022 39.512 4.41022 44.042 4.64022C46.782 4.78022 49.522 4.98022 52.272 5.15022C61.712 5.72022 71.142 6.27022 80.582 6.85022C85.442 7.15022 90.332 7.29022 95.152 7.87022C100.522 8.52022 104.442 12.3102 105.642 17.5602C105.882 18.6302 105.782 19.7902 105.712 20.9102V20.9002ZM120.242 85.4702C119.572 87.7502 118.312 89.8602 117.252 92.0102C117.132 92.2602 116.672 92.4502 116.352 92.4802C115.482 92.5402 114.602 92.5002 113.732 92.5002L113.692 92.7902C111.692 92.4502 109.662 92.2502 107.712 91.7202C105.232 91.0402 104.412 89.5602 104.762 87.0002C105.402 82.3002 107.502 78.1402 109.632 74.0002C109.782 73.7102 110.162 73.4402 110.482 73.3602C112.532 72.8402 114.572 72.2302 116.662 71.9402C120.152 71.4602 122.192 73.4502 121.792 77.0202C121.472 79.8602 121.032 82.7302 120.222 85.4602L120.242 85.4702Z" fill="black"/>
            <path d="M24.212 82.4602C22.902 82.3002 21.422 81.1802 20.382 82.7802C19.632 83.9302 20.172 85.0802 20.692 85.9802C21.222 85.2402 21.652 84.3102 22.372 83.7902C22.742 83.5202 23.652 84.0102 24.322 84.1502L24.252 84.5102C24.152 84.5502 24.012 84.6602 23.952 84.6302C21.882 83.6802 21.722 84.9402 21.622 86.4802C21.472 88.8202 21.802 91.0402 23.262 92.9702C23.372 93.1102 23.402 93.3002 23.332 93.5302C21.972 92.2002 21.272 90.5702 21.072 88.6802C21.002 88.0202 20.722 87.3702 20.502 86.7302C20.212 85.9202 19.722 85.1402 19.592 84.3102C19.292 82.3502 20.662 81.1302 22.622 81.5302C23.202 81.6502 23.752 81.9002 24.312 82.0802L24.222 82.4602H24.212Z" fill="black"/>
            <path d="M115.732 113.48C113.332 111.72 110.932 110.19 107.892 110.15C109.202 109.54 110.452 109.92 111.682 110.38C113.942 111.22 115.592 112.46 115.742 113.49L115.732 113.48Z" fill="black"/>
            <path d="M77.7319 152.96C69.1219 152.1 60.5419 151.25 51.9819 150.39C47.0119 149.89 42.0519 149.22 37.0719 148.88C31.0519 148.47 27.1319 145.27 24.6119 140.05C22.9819 136.67 22.1519 133.2 22.5519 129.32C23.7919 117.35 24.7819 105.36 25.8719 93.3802C26.9619 81.4402 28.0519 69.5002 29.1419 57.5602C30.2319 45.6202 31.3619 33.6802 32.3919 21.7402C32.6719 18.4602 32.7219 15.1702 33.8819 12.0302C35.6619 7.22019 39.5119 4.40019 44.0419 4.63019C46.7819 4.77019 49.5319 4.97019 52.2719 5.14019C61.7119 5.71019 71.1419 6.26019 80.5819 6.84019C85.4419 7.14019 90.3319 7.28019 95.1519 7.86019C100.522 8.51019 104.442 12.3002 105.642 17.5502C105.882 18.6202 105.782 19.7802 105.712 20.9002C105.092 31.6302 104.442 42.3502 103.792 53.0802C103.322 60.8502 102.842 68.6302 102.342 76.4002C102.312 76.8102 102.132 77.3202 101.842 77.5802C96.6119 82.3502 93.9719 88.5302 92.3219 95.2202C91.0219 100.5 90.2719 105.89 90.3819 111.3C90.5419 118.94 89.3719 126.39 87.9519 133.84C87.9019 134.13 87.8319 134.41 87.8019 134.7C87.5619 136.94 86.7519 138.83 85.2219 140.6C82.3119 143.94 80.2119 147.85 78.3119 151.84C78.1319 152.21 77.9319 152.57 77.7319 152.97V152.96Z" fill="var(--color-background)"/>
            </g>
            <path d="M32.2458 20.2598L105.268 26.5076L101.889 76.8811L93.489 90.1578L27.1694 81.9575L32.2458 20.2598Z" fill="black" fill-opacity="0.26"/>
            <path d="M40.6252 66.788L43.0951 38.0292L87.7511 41.6126L85.9769 72.4579L40.6252 66.788Z" fill="var(--color-focus)" stroke="black" stroke-width="3"/>
            <path d="M78.9097 72.8985L46.3683 68.8605V70.5232L78.9097 75.0362H81.5225V72.8985H78.9097Z" fill="black" stroke="#050505"/>
            <path d="M89.8909 40.9979L89.9043 41.0081L88.0877 73.0963L87.9651 73.1945L89.8909 40.9979Z" fill="black" stroke="#050505"/>
            <path d="M35.3433 67.9934L38.4055 34.9023L95.5554 39.9144L93.4095 75.006L35.3433 67.9934Z" stroke="white" stroke-width="2"/>
            <ellipse cx="57.2349" cy="128.118" rx="10.4341" ry="11.1455" fill="var(--color-primary)"/>
            <path d="M64.8544 128.118C64.8544 132.714 61.3819 136.325 57.2349 136.325C53.0879 136.325 49.6154 132.714 49.6154 128.118C49.6154 123.522 53.0879 119.911 57.2349 119.911C61.3819 119.911 64.8544 123.522 64.8544 128.118Z" fill="var(--color-primary)" stroke="white" stroke-width="2"/>
            <defs>
            <clipPath id="clip0_542_328">
            <rect width="137.48" height="192.22" fill="white" transform="translate(0.931946 0.300232)"/>
            </clipPath>
            </defs>
            </svg>
          </figure>
        </article>
        <div className="sticky bottom-0 -mx-4 p-4 bg-white/80 dark:bg-black/80 backdrop-blur-lg">
          <Button styleType="primary" onClick={startClipShare} className="w-full">
            Snap TV
          </Button>
        </div>
    </Layout>
  );
};

export default Home;
