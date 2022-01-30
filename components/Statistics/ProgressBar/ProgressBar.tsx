import s from "./ProgressBar.module.css";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className={s.root}>
      <div className={s.progress} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar