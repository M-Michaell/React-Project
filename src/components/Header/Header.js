import "./Header.css";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
export default function Header() {
  const language = useSelector((state) => state.language.current_lang);

  return (
    <div>
      <div className="HeaderBg p-4 m-4">
        <div className="custom-container">
          <h1 className="mb-5 p-2">
            {language === "ar-SA" ? (
              <span>مرحبًا بك في تطبيق الأفلام الخاص بنا</span>
            ) : (
              <span>Welcome to our movie app</span>
            )}
          </h1>
          <h6 className="mb-5 p-2">
            {language === "ar-SA" ? (
              <span>
                ملايين من الأفلام والمسلسلات والأشخاص لاكتشافها. ابدأ الاستكشاف
                الآن.
              </span>
            ) : (
              <span>
                Millions of movies, TV shows, and people to discover. Explore
                now.
              </span>
            )}
          </h6>

          <Search />
        </div>
      </div>
    </div>
  );
}
