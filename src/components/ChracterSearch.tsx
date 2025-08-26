import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CharacterSearch = () => {
  const [chSearch, setChSearch] = useState(``);
  const navigate = useNavigate();

  const onSearchHandler = (e: React.FormEvent) => {
    e.preventDefault();

    navigate(`/chracresult/${chSearch}`);
  };

  return (
    <div>
      <form onSubmit={onSearchHandler}>
        <input
          value={chSearch}
          onChange={(e) => setChSearch(e.target.value)}
          placeholder="캐릭터명을 입력해주세요."
          required
        />
        <button>검색</button>
      </form>
    </div>
  );
};

export default CharacterSearch;
