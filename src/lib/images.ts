const wix = (path: string) => `https://static.wixstatic.com/media/${path}`;

export const images = {
  logo: wix(
    "ab44bc_612d48e265474e3fad0e25266cc6e29b~mv2.png/v1/crop/x_0,y_127,w_770,h_286/fill/w_320,h_119,al_c,q_85/I%20beliv-Logo%20Final_edited.png",
  ),
  hero: wix(
    "ab44bc_5ace31ead0f643929f7e30d3113820d4~mv2.jpg/v1/fill/w_2940,h_3000,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ab44bc_5ace31ead0f643929f7e30d3113820d4~mv2.jpg",
  ),
  about: wix(
    "ab44bc_9f399d87dd294e938b883fe1a246abd1~mv2.jpg/v1/fill/w_2940,h_1592,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ab44bc_9f399d87dd294e938b883fe1a246abd1~mv2.jpg",
  ),
  dentist: wix(
    "ab44bc_f38ccedec90147df92a1d1053dbb702f.jpg/v1/fill/w_800,h_1000,al_c,q_85,usm_0.66_1.00_0.01/iBeliv%20Photography36.jpg",
  ),
  reviews: wix(
    "ab44bc_a564e5a37d514b2891cfbeab65e65e1d~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01/ab44bc_a564e5a37d514b2891cfbeab65e65e1d~mv2.jpg",
  ),
} as const;
