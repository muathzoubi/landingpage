const PreLoader = ({ show }: any) => {
  return (
    <div className="loader-container " style={{ display: show ? '' : 'none' }}>
      <span className="loader"></span>
    </div>
  );
};
export default PreLoader;
