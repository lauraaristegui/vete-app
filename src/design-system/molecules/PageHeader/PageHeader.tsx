import "./PageHeader.css";

type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="page-header">
      <h1 className="page-header__title">{title}</h1>
      <p className="page-header__description">{description}</p>
    </div>
  );
}