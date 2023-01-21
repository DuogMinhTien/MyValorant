import useResize from '~/hooks/useResize';

export default function Dot({ color = '#232323', size = { pc: 6, mobile: 4 }, style = {} }) {
  const device = useResize();
  return (
    <div
      style={{
        borderRadius: '100rem',
        backgroundColor: color,
        width: `${device === 'pc' ? size['pc'] : size['mobile']}px`,
        height: `${device === 'pc' ? size['pc'] : size['mobile']}px`,
        ...style,
      }}
    ></div>
  );
}
