export const DeliveryIcon = ({
    width = "3.2rem",
    height = "3.2rem",
    className,
}: {
    width?: string;
    height?: string;
    className: string;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 64 64"
        className={className}
        width={width}
        height={height}
    >
        <path
            fill="currentColor"
            d="M54,41l-.33,0-3.61-8.42A5,5,0,0,0,52,33a1,1,0,0,0,1-1V24a1,1,0,0,0-1-1,5,5,0,0,0-4.71,3.4,3.69,3.69,0,0,0-2.52-1.51,5,5,0,0,0-1.9.12H42c-1.69,0-2.44-1-3.62-2.63l-.59-.83A3.45,3.45,0,0,0,39.49,21a3.62,3.62,0,0,0,1.45-2.37,2.81,2.81,0,0,0,1.32-1.74,1.79,1.79,0,0,0-.55-1.57,4.77,4.77,0,0,1-.65-2.3A1,1,0,0,0,42,12a8,8,0,0,0-8.11-8A8.05,8.05,0,0,0,26,11.89a7.94,7.94,0,0,0,2.3,5.73,8.14,8.14,0,0,0,.7.62c-3.86.94-5.89,4.56-6.93,7.7A3.18,3.18,0,0,0,19.81,25H9.19a3.18,3.18,0,0,0-2.68,1.46,1,1,0,0,0,1.68,1.09,1.18,1.18,0,0,1,1-.54H11v3a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V27h1.81A1.19,1.19,0,0,1,21,28.19v7.63A1.19,1.19,0,0,1,19.81,37H9.19A1.17,1.17,0,0,1,8,36h2a1,1,0,0,0,0-2H8V32H9a1,1,0,0,0,0-2H4a1,1,0,0,0,0,2H6v2H2a1,1,0,0,0,0,2H6a3.18,3.18,0,0,0,3.17,3h5A6.67,6.67,0,0,0,13,40.54,18.33,18.33,0,0,0,11,49a1,1,0,0,0,1,1h3.07a8,8,0,0,0,15.86,0H46.07A8,8,0,1,0,54,41ZM16,29H13V27h3Zm35-3.83v5.66a3,3,0,0,1,0-5.66Zm-6.52,1.69a1.92,1.92,0,0,1,1.6,1.53l.26.61a9.1,9.1,0,0,1-4.51,1,2.64,2.64,0,0,1,1.48-3A2.92,2.92,0,0,1,44.48,26.87Zm-4.93-9.76A1,1,0,0,0,39,18a1.81,1.81,0,0,1-.63,1.32c-.57.38-1.63.29-3-.25a1,1,0,0,0-.22,0L35,18.94V15.11A2.11,2.11,0,0,1,37.11,13H39a6.69,6.69,0,0,0,1.17,3.62A2.64,2.64,0,0,1,39.55,17.11ZM28,11.91A6.11,6.11,0,0,1,33.91,6H34a6,6,0,0,1,5.92,5H37.11A4.12,4.12,0,0,0,33,15.11v2.81a6,6,0,0,1-5-6ZM31,20c3.27,0,4.47,1.71,5.74,3.51.92,1.32,2,2.76,3.8,3.27a5,5,0,0,0-.73,3.06,9.1,9.1,0,0,1-5.95-4.36,1,1,0,1,0-1.71,1,12.17,12.17,0,0,0,1.24,1.72l-.09.06A8.71,8.71,0,0,0,31.39,32H23V31C23.07,30.39,24.21,20,31,20ZM23,35.81V34h9c.2,0,5,.06,5,5v5H33V42a4.82,4.82,0,0,0-5-5H22.77A3.16,3.16,0,0,0,23,35.81ZM23,55a6,6,0,0,1-5.91-5h2.05a4,4,0,0,0,7.72,0h2.05A6,6,0,0,1,23,55Zm-1.72-5h3.44a2,2,0,0,1-3.44,0ZM13,48a16.09,16.09,0,0,1,1.82-6.59A4.58,4.58,0,0,1,18.93,39H28a2.85,2.85,0,0,1,3,3v3a5,5,0,0,0,1,3Zm23,0a3,3,0,0,1-2.82-2H38a1.88,1.88,0,0,1,2,1.93A8,8,0,0,1,39,48Zm6.41-1.17a2.58,2.58,0,0,1-.49.43A3.74,3.74,0,0,0,39,44.14V39a6.56,6.56,0,0,0-5.58-6.85,6.76,6.76,0,0,1,1.29-2.45.94.94,0,0,0,.07-.11,10.93,10.93,0,0,0,5.4,2.34L43,44.19A3.56,3.56,0,0,1,42.41,46.83ZM45,43.78,42.25,32a10.76,10.76,0,0,0,4.88-1.12l4.72,11L47.49,48H44A5.6,5.6,0,0,0,45,43.78ZM54,48H52.28a2,2,0,1,1,0,2H54a1,1,0,0,0,0-2Zm-4.06,0,.35-.49a4,4,0,0,0-.15.49ZM54,55a6,6,0,0,1-5.91-5h2.05a4,4,0,1,0,1.22-4l2.13-3c.17,0,.34,0,.51,0a6,6,0,0,1,0,12Z"
        />
    </svg>
);

export const SearchIcon = ({
    width = "3.2rem",
    height = "3.2rem",
    className,
}: {
    width?: string;
    height?: string;
    className: string;
}) => (
    <svg
        id="Capa_1"
        enable-background="new 0 0 461.516 461.516"
        // height="512"
        viewBox="0 0 461.516 461.516"
        // width="512"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
    >
        <g>
            <path
                fill="currentColor"
                d="m185.746 371.332c41.251.001 81.322-13.762 113.866-39.11l122.778 122.778c9.172 8.858 23.787 8.604 32.645-.568 8.641-8.947 8.641-23.131 0-32.077l-122.778-122.778c62.899-80.968 48.252-197.595-32.716-260.494s-197.594-48.252-260.493 32.716-48.252 197.595 32.716 260.494c32.597 25.323 72.704 39.06 113.982 39.039zm-98.651-284.273c54.484-54.485 142.82-54.486 197.305-.002s54.486 142.82.002 197.305-142.82 54.486-197.305.002c-.001-.001-.001-.001-.002-.002-54.484-54.087-54.805-142.101-.718-196.585.239-.24.478-.479.718-.718z"
            />
        </g>
    </svg>
);
