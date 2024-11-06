import { useTranslation } from "react-i18next";
import { MY_REPOS_URL, WEBSITE_REPO_ID } from "src/Data/globalVariables";
import { repoStarsForksToolTipLeftPos } from "src/Functions/componentsFunctions";
import { getDataById } from "src/Functions/helper";
import useAsync from "src/Hooks/Helper/useAsync";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./RepoStarsForks.module.scss";

const RepoStarsForks = () => {
  const { t, i18n } = useTranslation();
  const [reposData, isError] = useAsync(MY_REPOS_URL);
  const websiteRepo = getDataById(reposData, WEBSITE_REPO_ID);
  const leftToolTipPos = repoStarsForksToolTipLeftPos(i18n.language);

  return (
    !isError && (
      <div className={s.repoStarsForks} aria-label="Website's repository">
        <span className={s.label}>{t("")}</span>

        <ToolTip
          bottom="40px"
          left={leftToolTipPos}
          content={t("tooltips.repoStarsForks")}
        />
      </div>
    )
  );
};

export default RepoStarsForks;
