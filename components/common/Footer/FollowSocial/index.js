import LinkSocial from './LinkSocial';
import styles from './styles.module.scss';
export default function FollowSocial({ className }) {
  return (
    <div className={`${styles['follow-social']} ${className}`}>
      <h4 className={styles['title']}>Theo dõi COC</h4>
      <div className={styles['social-frame']}>
        <LinkSocial title={'twitter'} to="/#" img="/imgs/icons/social/white/twitter.svg" />
        <LinkSocial
          title={'facebook'}
          to="https://www.facebook.com/catonchain"
          img="/imgs/icons/social/white/facebook.svg"
        />
        <LinkSocial
          title={'tiktok'}
          to="https://www.tiktok.com/@catonchain"
          img="/imgs/icons/social/white/tiktok.svg"
        />
        <LinkSocial
          title={'instagram'}
          to="https://instagram.com/catonchain.official"
          img="/imgs/icons/social/white/instagram.svg"
        />
        <LinkSocial
          title={'linkedin'}
          to="https://www.linkedin.com/company/cat-on-chain/"
          img="/imgs/icons/social/white/linked-in.svg"
        />
        <LinkSocial
          title={'youtube'}
          to="https://www.youtube.com/channel/UCo4_hhW6o_3tdq_SkFuCAIQ"
          img="/imgs/icons/social/white/youtube.svg"
        />
      </div>
    </div>
  );
}
