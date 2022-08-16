export default (prevProps, nextProps) => (
  Object.keys(prevProps.item.attr).every(key => prevProps.item.attr[key] === nextProps.item.attr[key])
  && Object.keys(prevProps.item.link).every(key => prevProps.item.link[key] === nextProps.item.link[key])
);
