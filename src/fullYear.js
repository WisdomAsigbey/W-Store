const fullYear = () => {
  const date = $("#date");
  date.text(new Date().getFullYear());
};

fullYear();
