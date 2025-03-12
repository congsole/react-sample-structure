import React from "react";
import { Image } from "antd";
import { CSSProperties } from "react";
import iconLogo from "assets/images/logo.svg";
import iconComm from "assets/images/icon/icon_comm.svg";
import iconMypage from "assets/images/icon/icon_mypage.svg";
import iconLogout from "assets/images/icon/icon_logout.svg";
import iconHeaderInfo from "assets/images/icon/icon_header_info.svg";
import iconHeaderQna from "assets/images/icon/icon_header_qna.svg";
import iconHeaderGuide from "assets/images/icon/icon_header_guide.svg";
import iconGnbConsult from "assets/images/icon/icon_gnb_consult.svg";
import iconGnbConsultAct from "assets/images/icon/icon_gnb_consult_act.svg";
import iconGnbMaster from "assets/images/icon/icon_gnb_master.svg";
import iconGnbMasterAct from "assets/images/icon/icon_gnb_master_act.svg";
import iconGnbCreator from "assets/images/icon/icon_gnb_creator.svg";
import iconGnbCreatorAct from "assets/images/icon/icon_gnb_creator_act.svg";
import iconPdf from "assets/images/icon/icon_pdf.svg";
import iconSearch from "assets/images/icon/icon_search.svg";
import iconMenu1 from "assets/images/icon/icon_menu1.svg";
import iconMenu2 from "assets/images/icon/icon_menu2.svg";
import iconMenu3 from "assets/images/icon/icon_menu3.svg";
import iconMenu4 from "assets/images/icon/icon_menu4.svg";
import iconMenu5 from "assets/images/icon/icon_menu5.svg";
import iconMenu1_1 from "assets/images/icon/icon_menu1-1.svg";
import iconMenu1_2 from "assets/images/icon/icon_menu1-2.svg";
import iconMenu1_3 from "assets/images/icon/icon_menu1-3.svg";
import iconMenu1_4 from "assets/images/icon/icon_menu1-4.svg";
import iconMenu1_5 from "assets/images/icon/icon_menu1-5.svg";
import iconMenu2_1 from "assets/images/icon/icon_menu2-1.svg";
import iconMenu2_2 from "assets/images/icon/icon_menu2-2.svg";
import iconMenu3_1 from "assets/images/icon/icon_menu3-1.svg";
import iconMenu3_2 from "assets/images/icon/icon_menu3-2.svg";
import iconMenu3_3 from "assets/images/icon/icon_menu3-3.svg";
import iconMenu3_4 from "assets/images/icon/icon_menu3-4.svg";
import iconMore from "assets/images/icon/icon_more.svg";
import iconText from "assets/images/icon/icon_text.svg";
import iconDownload from "assets/images/icon/icon_download.svg";
import iconDownloadW from "assets/images/aiic/icon_download_wht.svg";
import iconDownloadG from "assets/images/icon/icon_download_gry.svg";
import iconSave from "assets/images/icon/icon_save.svg";
import iconDelete2 from "assets/images/icon/icon_delete2.svg";
import iconUp from "assets/images/icon/icon_graph_up.svg";
import iconDown from "assets/images/icon/icon_graph_down.svg";
import iconQue from "assets/images/icon/icon_question.svg";
import iconQueW from "assets/images/main/icon_question_wht.svg";
import iconFlagship from "assets/images/icon/icon_flagship.svg";
import iconModify from "assets/images/icon/icon_modify.svg";
import iconDelete from "assets/images/icon/icon_delete.svg";
import iconSlctDown from "assets/images/icon/icon_down.svg";
import iconEdit from "assets/images/icon/icon_edit.svg";
import iconDesc from "assets/images/icon/icon_desc.svg";
import iconCircleUp from "assets/images/icon/icon_circle_up.svg";
import iconCircleDown from "assets/images/icon/icon_circle_down.svg";
import iconLoading from "assets/images/icon/icon_loading.svg";
import iconLoading2 from "assets/images/icon/icon_loading2.svg";
import iconMenuMinus from "assets/images/icon/icon_menu_minus.svg";
import iconStore from "assets/images/icon/icon_store.svg";
import iconStoreAct from "assets/images/icon/icon_store_act.svg";
import iconOffice from "assets/images/icon/icon_office.svg";
import iconOfficeAct from "assets/images/icon/icon_office_act.svg";
import iconPopPortlet from "assets/images/icon/icon_popup_portlet.svg";
import iconPopChat from "assets/images/icon/icon_popup_chat.svg";
import iconLlm from "assets/images/icon/icon_llm.svg";
import iconMy from "assets/images/icon/icon_my.svg";
import iconMyAct from "assets/images/icon/icon_my_act.svg";
import iconGraph from "assets/images/icon/icon_card_graph.png";
import iconGraphGry from "assets/images/icon/icon_graph_gry.svg";
import iconClose from "assets/images/icon/icon_close.svg";
import iconSearchBtn from "assets/images/icon/icon_search_btn.svg";
import iconSearchBtnG from "assets/images/icon/icon_search_btn_gry.svg";
import iconSearchStopBtn from "assets/images/icon/icon_search_btn_stop.svg";
import iconProject from "assets/images/icon/icon_tab_project.svg";
import iconProjectAct from "assets/images/icon/icon_tab_project_act.svg";
import iconMsg from "assets/images/icon/icon_tab_msg.svg";
import iconMsgAct from "assets/images/icon/icon_tab_msg_act.svg";
import iconT from "assets/images/icon/icon_t.svg";
import iconTempCare from "assets/images/icon/icon_template_care.svg";
import iconTempSale from "assets/images/icon/icon_template_sale.svg";
import iconTempNotice from "assets/images/icon/icon_template_notice.svg";
import iconTempSurvey from "assets/images/icon/icon_template_survey.svg";
import iconMoreArrow from "assets/images/icon/icon_more_arrow.svg";
import iconMoreArrowB from "assets/images/main/icon_more_arrow_blue.svg";
import iconAdd from "assets/images/icon/icon_add.svg";
import iconAddWht from "assets/images/icon/icon_add_wht.svg";
import iconRocket from "assets/images/icon/icon_rocket.svg";
import iconHot from "assets/images/icon/icon_hot.svg";
import iconPopGuide from "assets/images/icon/icon_pop_guide.svg";
import iconPopInfo from "assets/images/icon/icon_pop_info.svg";
import iconBest from "assets/images/icon/icon_best.svg";
import iconSliderPrev from "assets/images/icon/icon_slider_prev.png";
import iconSliderNext from "assets/images/icon/icon_slider_next.png";
import iconDropMenu from "assets/images/icon/icon_dropmenu.png";
import iconMenuMaketing from "assets/images/icon/icon_menu_maketing.svg";
import iconMenuMsg from "assets/images/icon/icon_menu_msg.svg";
import iconMenuProject from "assets/images/icon/icon_menu_project.svg";
import iconMenuArchieve from "assets/images/icon/icon_menu_archieve.svg";
import iconMenuGuide from "assets/images/icon/icon_menu_guide.svg";
import iconCalendar from "assets/images/icon/icon_calendar.png";
import iconTagDelete from "assets/images/icon/icon_tag_delete.svg";
import iconInpSearch from "assets/images/icon/icon_inp_search.svg";
import iconPlusBlu from "assets/images/icon/icon_plus_blu.svg";
import iconChat from "assets/images/icon/icon_chat.svg";
import iconMms from "assets/images/icon/icon_mms.svg";
import iconDate from "assets/images/icon/icon_date.svg";
import iconCustomer from "assets/images/icon/icon_customer.svg";
import iconBanner from "assets/images/icon/icon_banner.svg";
import iconMap from "assets/images/icon/icon_map.svg";
import iconSurvey from "assets/images/icon/icon_survey.svg";
import iconRight from "assets/images/aiic/icon_right.svg";
import iconRightBlk from "assets/images/aiic/icon_right_blk.svg";
import iconImage from "assets/images/aiic/icon_image.svg";
import iconVideo from "assets/images/aiic/icon_video.svg";
import iconAdobe from "assets/images/aiic/icon_adobe.svg";
import iconDiagonalR from "assets/images/aiic/icon_right_diagonal.svg";
import iconImgSnb1 from "assets/images/aiic/icon_imgsnb1.svg";
import iconImgSnb2 from "assets/images/aiic/icon_imgsnb2.svg";
import iconImgSnb3 from "assets/images/aiic/icon_imgsnb3.svg";
import iconImgSnb4 from "assets/images/aiic/icon_imgsnb4.svg";
import iconImgSnb5 from "assets/images/aiic/icon_imgsnb5.svg";
import iconImgSnb6 from "assets/images/aiic/icon_imgsnb6.svg";
import iconImgSnb7 from "assets/images/aiic/icon_imgsnb7.svg";
import iconImgSnb8 from "assets/images/aiic/icon_imgsnb8.svg";
import iconImgSnb9 from "assets/images/aiic/icon_imgsnb9.svg";
import iconImgSnb10 from "assets/images/aiic/icon_imgsnb10.svg";
import iconImgSnb11 from "assets/images/aiic/icon_imgsnb11.svg";
import iconImgSnb12 from "assets/images/aiic/icon_imgsnb12.svg";
import iconImgSnb13 from "assets/images/aiic/icon_imgsnb13.svg";
import iconImgSnb1Act from "assets/images/aiic/icon_imgsnb1_act.svg";
import iconImgSnb2Act from "assets/images/aiic/icon_imgsnb2_act.svg";
import iconImgSnb3Act from "assets/images/aiic/icon_imgsnb3_act.svg";
import iconImgSnb4Act from "assets/images/aiic/icon_imgsnb4_act.svg";
import iconImgSnb5Act from "assets/images/aiic/icon_imgsnb5_act.svg";
import iconImgSnb6Act from "assets/images/aiic/icon_imgsnb6_act.svg";
import iconImgSnb7Act from "assets/images/aiic/icon_imgsnb7_act.svg";
import iconImgSnb8Act from "assets/images/aiic/icon_imgsnb8_act.svg";
import iconImgSnb9Act from "assets/images/aiic/icon_imgsnb9_act.svg";
import iconImgSnb10Act from "assets/images/aiic/icon_imgsnb10_act.svg";
import iconImgSnb11Act from "assets/images/aiic/icon_imgsnb11_act.svg";
import iconImgSnb12Act from "assets/images/aiic/icon_imgsnb12_act.svg";
import iconImgSnb13Act from "assets/images/aiic/icon_imgsnb13_act.svg";
import iconPlusGray from "assets/images/aiic/icon_plus_gray.svg";
import iconPopover from "assets/images/aiic/icon_popover.svg";
import iconPopoverBlk from "assets/images/aiic/icon_popover_blk.svg";
import iconTypeBlock from "assets/images/icon/icon_type_block.svg";
import iconTypeBlockAct from "assets/images/icon/icon_type_block_act.svg";
import iconTypeList from "assets/images/icon/icon_type_list.svg";
import iconTypeListAct from "assets/images/icon/icon_type_list_act.svg";
import iconExpand from "assets/images/aiic/icon_expand.svg";
import iconUpArrow from "assets/images/aiic/icon_up_arrow.svg";
import iconTempl1 from "assets/images/aiic/icon_template1.png";
import iconTempl2 from "assets/images/aiic/icon_template2.png";
import iconTempl3 from "assets/images/aiic/icon_template3.png";
import iconDetail from "assets/images/aiic/icon_detail.svg";
import iconCopy from "assets/images/aiic/icon_copy.svg";
import iconLike from "assets/images/aiic/icon_like.svg";
import iconLikeAct from "assets/images/aiic/icon_like_act.svg";
import iconLikeG from "assets/images/icon/icon_like_gry.svg";
import iconLikeGAct from "assets/images/icon/icon_like_gry_act.svg";
import iconDisLike from "assets/images/aiic/icon_dislike.svg";
import iconDisLikeAct from "assets/images/aiic/icon_dislike_act.svg";
import iconDisLikeG from "assets/images/icon/icon_dislike_gry.svg";
import iconDisLikeGAct from "assets/images/icon/icon_dislike_gry_act.svg";
import iconDeleteGry from "assets/images/icon/icon_delete_gry.svg";
import iconEditGry from "assets/images/icon/icon_edit_gry.svg";
import iconCopyGry from "assets/images/icon/icon_copy_gry.svg";
import iconAi from "assets/images/icon/icon_ai.svg";
import iconReset from "assets/images/icon/icon_reset.svg";
import iconResetType2 from "assets/images/icon/icon_reset_type2.svg";
import iconResetGry from "assets/images/icon/icon_reset_gry.svg";
import iconPrev from "assets/images/icon/icon_prev.svg";
import iconPrevQuick from "assets/images/icon/icon_pre_quick.svg";
import iconNext from "assets/images/icon/icon_next.svg";
import iconNextW from "assets/images/aiic/icon_next_wht.svg";
import iconNextQuick from "assets/images/icon/icon_next_quick.svg";
import iconCreatePrev from "assets/images/aiic/icon_prev.svg";
import iconCreateNext from "assets/images/aiic/icon_next.svg";
import iconCreatePrevDis from "assets/images/aiic/icon_prev_dis.svg";
import iconCreateNextDis from "assets/images/aiic/icon_next_dis.svg";
import iconPlay from "assets/images/aiic/icon_play.svg";
import iconMmsAni from "assets/images/icon/icon_mms_ani.svg";
import iconSaleAni from "assets/images/icon/icon_sale_ani.svg";
import iconBannerAni from "assets/images/icon/icon_banner_ani.svg";
import iconBannerNormal from "assets/images/icon/icon_banner_normal.svg";
import iconBannerT from "assets/images/icon/icon_banner_t.svg";
import iconSurveyAni from "assets/images/icon/icon_survey_ani.svg";
import iconNoticeAni from "assets/images/icon/icon_notice_ani.svg";
import iconCare from "assets/images/icon/icon_care.svg";
import iconMarketing from "assets/images/icon/icon_marketing.svg";
import iconStepArrow from "assets/images/icon/icon_step_arrow.svg";
import iconSpeaker from "assets/images/main/icon_speaker.svg";
import iconLock from "assets/images/aiic/icon_lock.svg";
import iconCreator from "assets/images/aiic/icon_creator.svg";
import iconEditor from "assets/images/aiic/icon_editor.svg";
import iconHub from "assets/images/aiic/icon_hub.svg";
import iconEmpty from "assets/images/icon/icon_empty.svg";
import iconShare from "assets/images/icon/icon_share.svg";
import iconShareGry from "assets/images/icon/icon_share_gry.svg";
import iconRename from "assets/images/icon/icon_rename.svg";
import iconCopyBlk from "assets/images/icon/icon_copy_blk.svg";
import iconCopyCircle from "assets/images/icon/icon_copy_circle.svg";
import iconCopyCircleAct from "assets/images/icon/icon_copy_circle_act.svg";
import iconCopyCircle2 from "assets/images/icon/icon_copy_circle2.svg";
import iconCopyCircleAct2 from "assets/images/icon/icon_copy_circle_act2.svg";
import iconNew from "assets/images/icon/icon_new.svg";
import iconMoreWht from "assets/images/icon/icon_more_wht.svg";
import iconCopyWht from "assets/images/icon/icon_copy_wht.svg";
import iconAdmin from "assets/images/icon/icon_admin.svg";
import iconUser from "assets/images/icon/icon_user.svg";
import iconAsk from "assets/images/icon/icon_ask.svg";
import iconUpload from "assets/images/icon/icon_upload.svg";
import iconTempSlct from "assets/images/icon/icon_temp_slct.svg";
import iconTempChange from "assets/images/icon/icon_temp_change.svg";
import iconInspection from "assets/images/icon/icon_inspection.svg";
import iconReload from "assets/images/icon/icon_reload.svg";
import iconFaceGood from "assets/images/icon/icon_face_good.svg";
import iconFaceBad from "assets/images/icon/icon_face_bad.svg";
import iconModifyType2 from "assets/images/icon/icon_modify_type2.svg";
import iconWriterTit1 from "assets/images/icon/icon_writer_tit1.svg";
import iconWriterTit2 from "assets/images/icon/icon_writer_tit2.svg";
import iconMoreArrow2 from "assets/images/icon/icon_more_arrow2.svg";
import iconNetworkAni from "assets/images/icon/icon_network_ani.svg";
import iconPushAni from "assets/images/icon/icon_push_ani.svg";
import iconDelHistory from "assets/images/icon/icon_delete_history.svg";
import iconIng from "assets/images/icon/icon_ing.svg";
import iconMamf from "assets/images/icon/icon_mamf_profile.svg";
import iconTabSliderPrev from "assets/images/icon/icon_tab_slider_prev.svg";
import iconTabSliderNext from "assets/images/icon/icon_tab_slider_next.svg";
import iconMoreArrowBlue from "assets/images/icon/icon_more_arrow_blue.svg";
import iconRecommend from "assets/images/icon/icon_recommend.svg";
import iconSmart from "assets/images/icon/icon_smart.svg";
import iconMessage from "assets/images/icon/icon_message.svg";
import iconMessage2 from "assets/images/icon/icon_message2.svg";
import iconNoImg from "assets/images/icon/icon_no_img.svg";
import iconAiInfo from "assets/images/icon/icon_ai_info.svg";
import iconSpin from "assets/images/icon/icon_spin.png";
import iconMenuPlus from "assets/images/icon/icon_menu_plus_blk.svg";
import iconAnswerComp from "assets/images/icon/icon_comp_answer.svg";
import iconAnswerYet from "assets/images/icon/icon_unanswer.svg";
import iconFilterPlus from "assets/images/icon/icon_filter_plus.svg";
import iconFilterMinus from "assets/images/icon/icon_filter_minus.svg";
import iconFullView from "assets/images/icon/icon_full_view.svg";
import iconSmartTit1 from "assets/images/icon/icon_smartTit1.svg";
import iconSmartTit2 from "assets/images/icon/icon_smartTit2.svg";
import iconSmartBee from "assets/images/icon/icon_smartbee.svg";
import iconSmartBee2 from "assets/images/icon/icon_smartbee2.svg";
import iconSmartBeeW from "assets/images/icon/icon_smartbee_wht.svg";
import iconDragBf from "assets/images/aiic/icon_drag_before.png";
import iconDragAf from "assets/images/aiic/icon_drag_after.png";
import iconLogoText from "assets/images/text_logo.svg";
import iconChk from "assets/images/icon/icon_chk.svg";
import iconRightArrow from "assets/images/icon/icon_right_arrow.svg";
import iconGnbWriter from "assets/images/icon/icon_writer.svg";
import iconGnbWriterAct from "assets/images/icon/icon_writer_act.svg";
import iconGuidePrev from "assets/images/icon/icon_guide_prev.svg";
import iconGuideNext from "assets/images/icon/icon_guide_next.svg";
import iconAicwTmpList1 from "assets/images/icon/icon_aicw_tmp_list1.svg";
import iconAicwTmpList2 from "assets/images/icon/icon_aicw_tmp_list2.svg";
import iconAicwTmpList3 from "assets/images/icon/icon_aicw_tmp_list3.svg";
import iconAicwTmpList4 from "assets/images/icon/icon_aicw_tmp_list4.svg";
import iconAicwTmpList5 from "assets/images/icon/icon_aicw_tmp_list5.svg";
import iconAicwTmpList6 from "assets/images/icon/icon_aicw_tmp_list6.svg";
import iconAicwTmpList7 from "assets/images/icon/icon_aicw_tmp_list7.svg";
import iconAicwTmpList8 from "assets/images/icon/icon_aicw_tmp_list8.svg";
import iconAicwTmpList9 from "assets/images/icon/icon_aicw_tmp_list9.svg";
import iconAicwTmpList10 from "assets/images/icon/icon_aicw_tmp_list10.svg";
import iconAicwTmpList11 from "assets/images/icon/icon_aicw_tmp_list11.svg";
import iconAicwTmpList12 from "assets/images/icon/icon_aicw_tmp_list12.svg";
import iconAicwTmpList13 from "assets/images/icon/icon_aicw_tmp_list13.svg";
import iconQuality1 from "assets/images/aiic/icon_quality1.svg";
import iconQuality2 from "assets/images/aiic/icon_quality2.svg";
import iconQuality3 from "assets/images/aiic/icon_quality3.svg";
import iconQualityBlu1 from "assets/images/icon/icon_quality_blu1.svg";
import iconQualityBlu2 from "assets/images/icon/icon_quality_blu2.svg";
import iconQualityBlu3 from "assets/images/icon/icon_quality_blu3.svg";
import iconTutoriImg from "assets/images/aiic/icon_tutori_img.svg";
import iconTutoriVdo from "assets/images/aiic/icon_tutori_vdo.svg";
import iconTutoriImgAct from "assets/images/aiic/icon_tutori_img_act.svg";
import iconTutoriVdoAct from "assets/images/aiic/icon_tutori_vdo_act.svg";
import iconAdobe1 from "assets/images/aiic/icon_adobe1.svg";
import iconAdobe2 from "assets/images/aiic/icon_adobe2.svg";
import iconSearchGry from "assets/images/icon/icon_search_gry.svg";
import iconGenerated from "assets/images/icon/icon_generated.svg";
import iconArrowPuple from "assets/images/icon/icon_arrow_bottom_puple.svg";
import iconCircleRight from "assets/images/icon/icon_circle_right.svg";
import iconBlank from "assets/images/icon/icon_blank.svg";
import iconEye from "assets/images/icon/icon_eye.svg";
import iconMail from "assets/images/icon/icon_mail.svg";
import iconMemo from "assets/images/icon/icon_memo.svg";
import iconInfo from "assets/images/icon/icon_info.svg";

interface Props {
  style?: CSSProperties;
  onClick?: (e: any) => void;
}

const IconLogo = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconLogo} alt="icon" />
    </div>
  );
};
const IconComm = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconComm} alt="icon" />
    </div>
  );
};
const IconMypage = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMypage} alt="icon" />
    </div>
  );
};
const IconLogout = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconLogout} alt="icon" />
    </div>
  );
};
const IconHeaderInfo = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconHeaderInfo} alt="icon" />
    </div>
  );
};
const IconHeaderQna = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconHeaderQna} alt="icon" />
    </div>
  );
};
const IconHeaderGuide = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconHeaderGuide} alt="icon" />
    </div>
  );
};
const IconGnbConsult = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGnbConsult} alt="icon" />
    </div>
  );
};
const IconGnbConsultAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGnbConsultAct} alt="icon" />
    </div>
  );
};
const IconGnbMaster = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGnbMaster} alt="icon" />
    </div>
  );
};
const IconGnbMasterAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGnbMasterAct} alt="icon" />
    </div>
  );
};
const IconGnbCreator = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGnbCreator} alt="icon" />
    </div>
  );
};
const IconGnbCreatorAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGnbCreatorAct} alt="icon" />
    </div>
  );
};
const IconPdf = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPdf} alt="icon" />
    </div>
  );
};
const IconSearch = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSearch} alt="icon" />
    </div>
  );
};
const IconMenu1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu1} alt="icon" />
    </div>
  );
};
const IconMenu2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu2} alt="icon" />
    </div>
  );
};
const IconMenu3 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu3} alt="icon" />
    </div>
  );
};
const IconMenu4 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu4} alt="icon" />
    </div>
  );
};
const IconMenu5 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu5} alt="icon" />
    </div>
  );
};
const IconMenu1_1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu1_1} alt="icon" />
    </div>
  );
};
const IconMenu1_2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu1_2} alt="icon" />
    </div>
  );
};
const IconMenu1_3 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu1_3} alt="icon" />
    </div>
  );
};
const IconMenu1_4 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu1_4} alt="icon" />
    </div>
  );
};
const IconMenu1_5 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu1_5} alt="icon" />
    </div>
  );
};
const IconMenu2_1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu2_1} alt="icon" />
    </div>
  );
};
const IconMenu2_2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu2_2} alt="icon" />
    </div>
  );
};
const IconMenu3_1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu3_1} alt="icon" />
    </div>
  );
};
const IconMenu3_2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu3_2} alt="icon" />
    </div>
  );
};
const IconMenu3_3 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu3_3} alt="icon" />
    </div>
  );
};
const IconMenu3_4 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenu3_4} alt="icon" />
    </div>
  );
};
const IconMore = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMore} alt="icon" />
    </div>
  );
};
const IconText = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconText} alt="icon" />
    </div>
  );
};
const IconDownload = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDownload} alt="icon" />
    </div>
  );
};
const IconDownloadW = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDownloadW} alt="icon" />
    </div>
  );
};
const IconDownloadG = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDownloadG} alt="icon" />
    </div>
  );
};
const IconSave = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSave} alt="icon" />
    </div>
  );
};
const IconDelete2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDelete2} alt="icon" />
    </div>
  );
};
const IconUp = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconUp} alt="icon" />
    </div>
  );
};
const IconDown = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDown} alt="icon" />
    </div>
  );
};
const IconQue = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconQue} alt="icon" />
    </div>
  );
};
const IconQueW = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconQueW} alt="icon" />
    </div>
  );
};
const IconFlagship = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconFlagship} alt="icon" />
    </div>
  );
};
const IconModify = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconModify} alt="icon" />
    </div>
  );
};
const IconDelete = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDelete} alt="icon" />
    </div>
  );
};
const IconSlctDown = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSlctDown} alt="icon" />
    </div>
  );
};
const IconEdit = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconEdit} alt="icon" />
    </div>
  );
};
const IconDesc = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDesc} alt="icon" />
    </div>
  );
};
const IconCircleUp = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCircleUp} alt="icon" />
    </div>
  );
};
const IconCircleDown = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCircleDown} alt="icon" />
    </div>
  );
};
const IconLoading = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconLoading} alt="icon" />
    </div>
  );
};
const IconLoading2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconLoading2} alt="icon" />
    </div>
  );
};
const IconMenuMinus = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenuMinus} alt="icon" />
    </div>
  );
};
const IconStore = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconStore} alt="icon" />
    </div>
  );
};
const IconStoreAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconStoreAct} alt="icon" />
    </div>
  );
};
const IconOffice = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconOffice} alt="icon" />
    </div>
  );
};
const IconOfficeAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconOfficeAct} alt="icon" />
    </div>
  );
};
const IconPopPortlet = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPopPortlet} alt="icon" />
    </div>
  );
};
const IconPopChat = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPopChat} alt="icon" />
    </div>
  );
};
const IconLlm = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconLlm} alt="icon" />
    </div>
  );
};
const IconMy = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMy} alt="icon" />
    </div>
  );
};
const IconMyAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMyAct} alt="icon" />
    </div>
  );
};
const IconGraph = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGraph} alt="icon" />
    </div>
  );
};
const IconGraphGry = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGraphGry} alt="icon" />
    </div>
  );
};
const IconClose = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconClose} alt="icon" />
    </div>
  );
};
const IconSearchBtn = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSearchBtn} alt="icon" />
    </div>
  );
};
const IconSearchBtnG = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSearchBtnG} alt="icon" />
    </div>
  );
};
const IconSearchStopBtn = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSearchStopBtn} alt="icon" />
    </div>
  );
};
const IconProject = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconProject} alt="icon" />
    </div>
  );
};
const IconProjectAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconProjectAct} alt="icon" />
    </div>
  );
};
const IconMsg = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMsg} alt="icon" />
    </div>
  );
};
const IconMsgAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMsgAct} alt="icon" />
    </div>
  );
};
const IconT = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconT} alt="icon" />
    </div>
  );
};
const IconTempCare = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTempCare} alt="icon" />
    </div>
  );
};
const IconTempSale = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTempSale} alt="icon" />
    </div>
  );
};
const IconTempNotice = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTempNotice} alt="icon" />
    </div>
  );
};
const IconTempSurvey = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTempSurvey} alt="icon" />
    </div>
  );
};
const IconMoreArrow = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMoreArrow} alt="icon" />
    </div>
  );
};
const IconMoreArrowB = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMoreArrowB} alt="icon" />
    </div>
  );
};
const IconAdd = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAdd} alt="icon" />
    </div>
  );
};
const IconAddWht = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAddWht} alt="icon" />
    </div>
  );
};
const IconRocket = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconRocket} alt="icon" />
    </div>
  );
};
const IconHot = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconHot} alt="icon" />
    </div>
  );
};
const IconPopGuide = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPopGuide} alt="icon" />
    </div>
  );
};
const IconPopInfo = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPopInfo} alt="icon" />
    </div>
  );
};
const IconBest = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconBest} alt="icon" />
    </div>
  );
};
const IconSliderPrev = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSliderPrev} alt="icon" />
    </div>
  );
};
const IconSliderNext = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSliderNext} alt="icon" />
    </div>
  );
};
const IconDropMenu = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDropMenu} alt="icon" />
    </div>
  );
};
const IconMenuMaketing = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenuMaketing} alt="icon" />
    </div>
  );
};
const IconMenuMsg = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenuMsg} alt="icon" />
    </div>
  );
};
const IconMenuProject = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenuProject} alt="icon" />
    </div>
  );
};
const IconMenuArchieve = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenuArchieve} alt="icon" />
    </div>
  );
};
const IconMenuGuide = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenuGuide} alt="icon" />
    </div>
  );
};
const IconCalendar = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCalendar} alt="icon" />
    </div>
  );
};
const IconTagDelete = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTagDelete} alt="icon" />
    </div>
  );
};
const IconInpSearch = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconInpSearch} alt="icon" />
    </div>
  );
};
const IconPlusBlu = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPlusBlu} alt="icon" />
    </div>
  );
};
const IconChat = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconChat} alt="icon" />
    </div>
  );
};
const IconMms = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMms} alt="icon" />
    </div>
  );
};
const IconDate = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDate} alt="icon" />
    </div>
  );
};
const IconCustomer = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCustomer} alt="icon" />
    </div>
  );
};
const IconBanner = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconBanner} alt="icon" />
    </div>
  );
};
const IconMap = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMap} alt="icon" />
    </div>
  );
};
const IconSurvey = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSurvey} alt="icon" />
    </div>
  );
};
const IconRight = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconRight} alt="icon" />
    </div>
  );
};
const IconRightBlk = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconRightBlk} alt="icon" />
    </div>
  );
};
const IconImage = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImage} alt="icon" />
    </div>
  );
};
const IconVideo = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconVideo} alt="icon" />
    </div>
  );
};
const IconAdobe = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAdobe} alt="icon" />
    </div>
  );
};
const IconDiagonalR = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDiagonalR} alt="icon" />
    </div>
  );
};
const IconImgSnb1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb1} alt="icon" />
    </div>
  );
};
const IconImgSnb2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb2} alt="icon" />
    </div>
  );
};
const IconImgSnb3 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb3} alt="icon" />
    </div>
  );
};
const IconImgSnb4 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb4} alt="icon" />
    </div>
  );
};
const IconImgSnb5 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb5} alt="icon" />
    </div>
  );
};
const IconImgSnb6 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb6} alt="icon" />
    </div>
  );
};
const IconImgSnb7 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb7} alt="icon" />
    </div>
  );
};
const IconImgSnb8 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb8} alt="icon" />
    </div>
  );
};
const IconImgSnb9 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb9} alt="icon" />
    </div>
  );
};
const IconImgSnb10 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb10} alt="icon" />
    </div>
  );
};
const IconImgSnb11 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb11} alt="icon" />
    </div>
  );
};
const IconImgSnb12 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb12} alt="icon" />
    </div>
  );
};
const IconImgSnb13 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb13} alt="icon" />
    </div>
  );
};
const IconImgSnb1Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb1Act} alt="icon" />
    </div>
  );
};
const IconImgSnb2Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb2Act} alt="icon" />
    </div>
  );
};
const IconImgSnb3Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb3Act} alt="icon" />
    </div>
  );
};
const IconImgSnb4Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb4Act} alt="icon" />
    </div>
  );
};
const IconImgSnb5Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb5Act} alt="icon" />
    </div>
  );
};
const IconImgSnb6Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb6Act} alt="icon" />
    </div>
  );
};
const IconImgSnb7Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb7Act} alt="icon" />
    </div>
  );
};
const IconImgSnb8Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb8Act} alt="icon" />
    </div>
  );
};
const IconImgSnb9Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb9Act} alt="icon" />
    </div>
  );
};
const IconImgSnb10Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb10Act} alt="icon" />
    </div>
  );
};
const IconImgSnb11Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb11Act} alt="icon" />
    </div>
  );
};
const IconImgSnb12Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb12Act} alt="icon" />
    </div>
  );
};
const IconImgSnb13Act = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconImgSnb13Act} alt="icon" />
    </div>
  );
};
const IconPlusGray = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPlusGray} alt="icon" />
    </div>
  );
};
const IconPopover = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPopover} alt="icon" />
    </div>
  );
};
const IconPopoverBlk = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPopoverBlk} alt="icon" />
    </div>
  );
};
const IconTypeBlock = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTypeBlock} alt="icon" />
    </div>
  );
};
const IconTypeBlockAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTypeBlockAct} alt="icon" />
    </div>
  );
};
const IconTypeList = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTypeList} alt="icon" />
    </div>
  );
};
const IconTypeListAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTypeListAct} alt="icon" />
    </div>
  );
};
const IconExpand = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconExpand} alt="icon" />
    </div>
  );
};
const IconUpArrow = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconUpArrow} alt="icon" />
    </div>
  );
};
const IconTempl1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTempl1} alt="icon" />
    </div>
  );
};
const IconTempl2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTempl2} alt="icon" />
    </div>
  );
};
const IconTempl3 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTempl3} alt="icon" />
    </div>
  );
};
const IconDetail = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDetail} alt="icon" />
    </div>
  );
};
const IconCopy = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCopy} alt="icon" />
    </div>
  );
};
const IconLike = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconLike} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconDisLike = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDisLike} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconLikeAct = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconLikeAct} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconDisLikeAct = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDisLikeAct} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconLikeG = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconLikeG} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconDisLikeG = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDisLikeG} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconLikeGAct = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconLikeGAct} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconDisLikeGAct = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDisLikeGAct} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconDeleteGry = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDeleteGry} alt="icon" />
    </div>
  );
};
const IconEditGry = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconEditGry} alt="icon" />
    </div>
  );
};
const IconCopyGry = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCopyGry} alt="icon" />
    </div>
  );
};
const IconAi = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAi} alt="icon" />
    </div>
  );
};
const IconReset = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconReset} alt="icon" />
    </div>
  );
};
const IconResetType2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconResetType2} alt="icon" />
    </div>
  );
};
const IconResetGry = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconResetGry} alt="icon" />
    </div>
  );
};
const IconPrev = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPrev} alt="icon" />
    </div>
  );
};
const IconPrevQuick = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPrevQuick} alt="icon" />
    </div>
  );
};
const IconNext = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconNext} alt="icon" />
    </div>
  );
};
const IconNextW = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconNextW} alt="icon" />
    </div>
  );
};
const IconNextQuick = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconNextQuick} alt="icon" />
    </div>
  );
};
const IconCreatePrev = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCreatePrev} alt="icon" />
    </div>
  );
};
const IconCreateNext = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCreateNext} alt="icon" />
    </div>
  );
};
const IconCreatePrevDis = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCreatePrevDis} alt="icon" />
    </div>
  );
};
const IconCreateNextDis = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCreateNextDis} alt="icon" />
    </div>
  );
};
const IconPlay = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPlay} alt="icon" />
    </div>
  );
};
const IconMmsAni = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMmsAni} alt="icon" />
    </div>
  );
};
const IconSaleAni = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSaleAni} alt="icon" />
    </div>
  );
};
const IconBannerAni = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconBannerAni} alt="icon" />
    </div>
  );
};
const IconBannerNormal = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconBannerNormal} alt="icon" />
    </div>
  );
};
const IconBannerT = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconBannerT} alt="icon" />
    </div>
  );
};
const IconNoticeAni = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconNoticeAni} alt="icon" />
    </div>
  );
};
const IconSurveyAni = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSurveyAni} alt="icon" />
    </div>
  );
};
const IconCare = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCare} alt="icon" />
    </div>
  );
};
const IconMarketing = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMarketing} alt="icon" />
    </div>
  );
};
const IconStepArrow = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconStepArrow} alt="icon" />
    </div>
  );
};
const IconSpeaker = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSpeaker} alt="icon" />
    </div>
  );
};
const IconLock = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconLock} alt="icon" />
    </div>
  );
};
const IconCreator = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCreator} alt="icon" />
    </div>
  );
};
const IconEditor = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconEditor} alt="icon" />
    </div>
  );
};
const IconHub = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconHub} alt="icon" />
    </div>
  );
};
const IconEmpty = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconEmpty} alt="icon" />
    </div>
  );
};
const IconShare = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconShare} alt="icon" />
    </div>
  );
};
const IconShareGry = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconShareGry} alt="icon" />
    </div>
  );
};
const IconRename = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconRename} alt="icon" />
    </div>
  );
};
const IconCopyBlk = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCopyBlk} alt="icon" />
    </div>
  );
};
const IconCopyCircle = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCopyCircle} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconCopyCircleAct = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCopyCircleAct} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconCopyCircle2 = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCopyCircle2} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconCopyCircleAct2 = ({ style, onClick }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCopyCircleAct2} alt="icon" onClick={onClick} />
    </div>
  );
};
const IconNew = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconNew} alt="icon" />
    </div>
  );
};
const IconMoreWht = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMoreWht} alt="icon" />
    </div>
  );
};
const IconCopyWht = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCopyWht} alt="icon" />
    </div>
  );
};
const IconAdmin = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAdmin} alt="icon" />
    </div>
  );
};
const IconUser = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconUser} alt="icon" />
    </div>
  );
};
const IconAsk = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAsk} alt="icon" />
    </div>
  );
};
const IconUpload = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconUpload} alt="icon" />
    </div>
  );
};
const IconTempSlct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTempSlct} alt="icon" />
    </div>
  );
};
const IconTempChange = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTempChange} alt="icon" />
    </div>
  );
};
const IconInspection = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconInspection} alt="icon" />
    </div>
  );
};
const IconReload = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconReload} alt="icon" />
    </div>
  );
};
const IconFaceGood = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconFaceGood} alt="icon" />
    </div>
  );
};
const IconFaceBad = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconFaceBad} alt="icon" />
    </div>
  );
};
const IconModifyType2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconModifyType2} alt="icon" />
    </div>
  );
};
const IconWriterTit1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconWriterTit1} alt="icon" />
    </div>
  );
};
const IconWriterTit2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconWriterTit2} alt="icon" />
    </div>
  );
};
const IconMoreArrow2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMoreArrow2} alt="icon" />
    </div>
  );
};
const IconNetworkAni = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconNetworkAni} alt="icon" />
    </div>
  );
};
const IconPushAni = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconPushAni} alt="icon" />
    </div>
  );
};
const IconDelHistory = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDelHistory} alt="icon" />
    </div>
  );
};
const IconIng = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconIng} alt="icon" />
    </div>
  );
};
const IconMamf = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMamf} alt="icon" />
    </div>
  );
};
const IconTabSliderPrev = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTabSliderPrev} alt="icon" />
    </div>
  );
};
const IconTabSliderNext = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTabSliderNext} alt="icon" />
    </div>
  );
};
const IconMoreArrowBlue = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMoreArrowBlue} alt="icon" />
    </div>
  );
};
const IconRecommend = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconRecommend} alt="icon" />
    </div>
  );
};
const IconSmart = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSmart} alt="icon" />
    </div>
  );
};
const IconMessage = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMessage} alt="icon" />
    </div>
  );
};
const IconMessage2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMessage2} alt="icon" />
    </div>
  );
};
const IconNoImg = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconNoImg} alt="icon" />
    </div>
  );
};
const IconAiInfo = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAiInfo} alt="icon" />
    </div>
  );
};
const IconSpin = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSpin} alt="icon" />
    </div>
  );
};
const IconMenuPlus = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMenuPlus} alt="icon" />
    </div>
  );
};
const IconAnswerComp = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAnswerComp} alt="icon" />
    </div>
  );
};
const IconAnswerYet = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAnswerYet} alt="icon" />
    </div>
  );
};
const IconFilterPlus = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconFilterPlus} alt="icon" />
    </div>
  );
};
const IconFilterMinus = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconFilterMinus} alt="icon" />
    </div>
  );
};
const IconFullView = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconFullView} alt="icon" />
    </div>
  );
};
const IconSmartTit1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSmartTit1} alt="icon" />
    </div>
  );
};
const IconSmartTit2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSmartTit2} alt="icon" />
    </div>
  );
};
const IconSmartBee = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSmartBee} alt="icon" />
    </div>
  );
};
const IconSmartBee2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSmartBee2} alt="icon" />
    </div>
  );
};
const IconSmartBeeW = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSmartBeeW} alt="icon" />
    </div>
  );
};
const IconDragBf = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDragBf} alt="icon" />
    </div>
  );
};
const IconDragAf = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconDragAf} alt="icon" />
    </div>
  );
};
const IconLogoText = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconLogoText} alt="icon" />
    </div>
  );
};
const IconChk = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconChk} alt="icon" />
    </div>
  );
};
const IconRightArrow = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconRightArrow} alt="icon" />
    </div>
  );
};
const IconGnbWriter = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGnbWriter} alt="icon" />
    </div>
  );
};
const IconGnbWriterAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGnbWriterAct} alt="icon" />
    </div>
  );
};
const IconGuidePrev = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGuidePrev} alt="icon" />
    </div>
  );
};
const IconGuideNext = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGuideNext} alt="icon" />
    </div>
  );
};
const IconAicwTmpList1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList1} alt="icon" />
    </div>
  );
};
const IconAicwTmpList2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList2} alt="icon" />
    </div>
  );
};
const IconAicwTmpList3 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList3} alt="icon" />
    </div>
  );
};
const IconAicwTmpList4 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList4} alt="icon" />
    </div>
  );
};
const IconAicwTmpList5 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList5} alt="icon" />
    </div>
  );
};
const IconAicwTmpList6 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList6} alt="icon" />
    </div>
  );
};
const IconAicwTmpList7 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList7} alt="icon" />
    </div>
  );
};
const IconAicwTmpList8 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList8} alt="icon" />
    </div>
  );
};
const IconAicwTmpList9 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList9} alt="icon" />
    </div>
  );
};
const IconAicwTmpList10 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList10} alt="icon" />
    </div>
  );
};
const IconAicwTmpList11 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList11} alt="icon" />
    </div>
  );
};
const IconAicwTmpList12 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList12} alt="icon" />
    </div>
  );
};
const IconAicwTmpList13 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAicwTmpList13} alt="icon" />
    </div>
  );
};
const IconQuality1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconQuality1} alt="icon" />
    </div>
  );
};
const IconQuality2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconQuality2} alt="icon" />
    </div>
  );
};
const IconQuality3 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconQuality3} alt="icon" />
    </div>
  );
};
const IconQualityBlu1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconQualityBlu1} alt="icon" />
    </div>
  );
};
const IconQualityBlu2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconQualityBlu2} alt="icon" />
    </div>
  );
};
const IconQualityBlu3 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconQualityBlu3} alt="icon" />
    </div>
  );
};
const IconTutoriImg = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTutoriImg} alt="icon" />
    </div>
  );
};
const IconTutoriVdo = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTutoriVdo} alt="icon" />
    </div>
  );
};
const IconTutoriImgAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTutoriImgAct} alt="icon" />
    </div>
  );
};
const IconTutoriVdoAct = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconTutoriVdoAct} alt="icon" />
    </div>
  );
};
const IconAdobe1 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAdobe1} alt="icon" />
    </div>
  );
};
const IconAdobe2 = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconAdobe2} alt="icon" />
    </div>
  );
};
const IconSearchGry = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconSearchGry} alt="icon" />
    </div>
  );
};
const IconGenerated = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconGenerated} alt="icon" />
    </div>
  );
};
const IconArrowPuple = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconArrowPuple} alt="icon" />
    </div>
  );
};
const IconCircleRight = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconCircleRight} alt="icon" />
    </div>
  );
};
const IconBlank = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconBlank} alt="icon" />
    </div>
  );
};
const IconEye = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconEye} alt="icon" />
    </div>
  );
};
const IconMail = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMail} alt="icon" />
    </div>
  );
};
const IconMemo = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconMemo} alt="icon" />
    </div>
  );
};
const IconInfo = ({ style }: Props) => {
  return (
    <div className={"ui-icons"} style={style}>
      <Image preview={false} src={iconInfo} alt="icon" />
    </div>
  );
};
export {
  IconLogo,
  IconComm,
  IconMypage,
  IconLogout,
  IconHeaderInfo,
  IconHeaderQna,
  IconHeaderGuide,
  IconGnbConsult,
  IconGnbConsultAct,
  IconGnbMaster,
  IconGnbMasterAct,
  IconGnbCreator,
  IconGnbCreatorAct,
  IconPdf,
  IconSearch,
  IconMenu1,
  IconMenu2,
  IconMenu3,
  IconMenu4,
  IconMenu5,
  IconMenu1_1,
  IconMenu1_2,
  IconMenu1_3,
  IconMenu1_4,
  IconMenu1_5,
  IconMenu2_1,
  IconMenu2_2,
  IconMenu3_1,
  IconMenu3_2,
  IconMenu3_3,
  IconMenu3_4,
  IconMore,
  IconText,
  IconDownload,
  IconDownloadW,
  IconDownloadG,
  IconSave,
  IconDelete2,
  IconUp,
  IconDown,
  IconQue,
  IconQueW,
  IconFlagship,
  IconModify,
  IconDelete,
  IconSlctDown,
  IconEdit,
  IconDesc,
  IconCircleUp,
  IconCircleDown,
  IconLoading,
  IconLoading2,
  IconMenuMinus,
  IconStore,
  IconStoreAct,
  IconOffice,
  IconOfficeAct,
  IconPopPortlet,
  IconPopChat,
  IconLlm,
  IconMy,
  IconMyAct,
  IconGraph,
  IconClose,
  IconSearchBtn,
  IconSearchBtnG,
  IconSearchStopBtn,
  IconProject,
  IconProjectAct,
  IconMsg,
  IconMsgAct,
  IconT,
  IconTempCare,
  IconTempSale,
  IconTempNotice,
  IconTempSurvey,
  IconMoreArrow,
  IconMoreArrowB,
  IconAdd,
  IconAddWht,
  IconRocket,
  IconHot,
  IconPopGuide,
  IconPopInfo,
  IconBest,
  IconSliderPrev,
  IconSliderNext,
  IconDropMenu,
  IconMenuMaketing,
  IconMenuMsg,
  IconMenuProject,
  IconMenuArchieve,
  IconMenuGuide,
  IconCalendar,
  IconTagDelete,
  IconInpSearch,
  IconPlusBlu,
  IconChat,
  IconMms,
  IconDate,
  IconCustomer,
  IconBanner,
  IconMap,
  IconSurvey,
  IconRight,
  IconRightBlk,
  IconImage,
  IconVideo,
  IconAdobe,
  IconDiagonalR,
  IconImgSnb1,
  IconImgSnb2,
  IconImgSnb3,
  IconImgSnb4,
  IconImgSnb5,
  IconImgSnb6,
  IconImgSnb7,
  IconImgSnb8,
  IconImgSnb9,
  IconImgSnb10,
  IconImgSnb11,
  IconImgSnb12,
  IconImgSnb13,
  IconImgSnb1Act,
  IconImgSnb2Act,
  IconImgSnb3Act,
  IconImgSnb4Act,
  IconImgSnb5Act,
  IconImgSnb6Act,
  IconImgSnb7Act,
  IconImgSnb8Act,
  IconImgSnb9Act,
  IconImgSnb10Act,
  IconImgSnb11Act,
  IconImgSnb12Act,
  IconImgSnb13Act,
  IconPlusGray,
  IconPopover,
  IconPopoverBlk,
  IconTypeBlock,
  IconTypeBlockAct,
  IconTypeList,
  IconTypeListAct,
  IconExpand,
  IconUpArrow,
  IconTempl1,
  IconTempl2,
  IconTempl3,
  IconDetail,
  IconCopy,
  IconLike,
  IconDisLike,
  IconLikeAct,
  IconDisLikeAct,
  IconLikeG,
  IconDisLikeG,
  IconLikeGAct,
  IconDisLikeGAct,
  IconDeleteGry,
  IconEditGry,
  IconCopyGry,
  IconAi,
  IconReset,
  IconResetType2,
  IconResetGry,
  IconPrev,
  IconPrevQuick,
  IconNext,
  IconNextW,
  IconNextQuick,
  IconCreatePrev,
  IconCreateNext,
  IconCreatePrevDis,
  IconCreateNextDis,
  IconPlay,
  IconMmsAni,
  IconSaleAni,
  IconBannerAni,
  IconBannerNormal,
  IconBannerT,
  IconNoticeAni,
  IconSurveyAni,
  IconCare,
  IconMarketing,
  IconStepArrow,
  IconSpeaker,
  IconLock,
  IconCreator,
  IconEditor,
  IconHub,
  IconEmpty,
  IconShare,
  IconShareGry,
  IconRename,
  IconCopyBlk,
  IconCopyCircle,
  IconCopyCircleAct,
  IconCopyCircle2,
  IconCopyCircleAct2,
  IconNew,
  IconMoreWht,
  IconCopyWht,
  IconAdmin,
  IconUser,
  IconAsk,
  IconUpload,
  IconTempSlct,
  IconTempChange,
  IconInspection,
  IconReload,
  IconFaceGood,
  IconFaceBad,
  IconModifyType2,
  IconWriterTit1,
  IconWriterTit2,
  IconMoreArrow2,
  IconNetworkAni,
  IconPushAni,
  IconDelHistory,
  IconIng,
  IconMamf,
  IconTabSliderPrev,
  IconTabSliderNext,
  IconMoreArrowBlue,
  IconRecommend,
  IconSmart,
  IconMessage,
  IconMessage2,
  IconNoImg,
  IconAiInfo,
  IconSpin,
  IconMenuPlus,
  IconAnswerComp,
  IconAnswerYet,
  IconFilterPlus,
  IconFilterMinus,
  IconFullView,
  IconSmartTit1,
  IconSmartTit2,
  IconSmartBee,
  IconSmartBee2,
  IconSmartBeeW,
  IconDragBf,
  IconDragAf,
  IconLogoText,
  IconGraphGry,
  IconChk,
  IconRightArrow,
  IconGnbWriter,
  IconGnbWriterAct,
  IconGuidePrev,
  IconGuideNext,
  IconAicwTmpList1,
  IconAicwTmpList2,
  IconAicwTmpList3,
  IconAicwTmpList4,
  IconAicwTmpList5,
  IconAicwTmpList6,
  IconAicwTmpList7,
  IconAicwTmpList8,
  IconAicwTmpList9,
  IconAicwTmpList10,
  IconAicwTmpList11,
  IconAicwTmpList12,
  IconAicwTmpList13,
  IconQuality1,
  IconQuality2,
  IconQuality3,
  IconQualityBlu1,
  IconQualityBlu2,
  IconQualityBlu3,
  IconTutoriImg,
  IconTutoriVdo,
  IconTutoriImgAct,
  IconTutoriVdoAct,
  IconAdobe1,
  IconAdobe2,
  IconSearchGry,
  IconGenerated,
  IconArrowPuple,
  IconCircleRight,
  IconBlank,
  IconEye,
  IconMail,
  IconMemo,
  IconInfo,
};
