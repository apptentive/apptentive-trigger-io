/* This file was generated as part of a ForgeModule.
 *
 * You may move this file to another package if you require, however do not modify its contents.
 * To add more resources rebuild the inspector project.
 */

package io.trigger.forge.android.module.apptentive;

import java.lang.reflect.Field;

public class R {
    public static class anim {
        public static int slide_down_out=0x7f040000;
        public static int slide_up_in=0x7f040001;
        static {
            try {
                Class<?> realR = Class.forName("io.trigger.forge.android.inspector.R");
                for (Class<?> c : realR.getClasses()) {
                    if (c.getSimpleName().equals("anim")) {
                        for (Field f : anim.class.getDeclaredFields()) {
                            try {
                                f.set(null, c.getDeclaredField(f.getName()).get(null));
                            } catch (IllegalArgumentException e) {
                            } catch (IllegalAccessException e) {
                            } catch (NoSuchFieldException e) {
                            }
                        }
                        break;
                    }
                }               
            } catch (ClassNotFoundException e) {
            }
        }
    }
    public static class attr {
        static {
            try {
                Class<?> realR = Class.forName("io.trigger.forge.android.inspector.R");
                for (Class<?> c : realR.getClasses()) {
                    if (c.getSimpleName().equals("attr")) {
                        for (Field f : attr.class.getDeclaredFields()) {
                            try {
                                f.set(null, c.getDeclaredField(f.getName()).get(null));
                            } catch (IllegalArgumentException e) {
                            } catch (IllegalAccessException e) {
                            } catch (NoSuchFieldException e) {
                            }
                        }
                        break;
                    }
                }               
            } catch (ClassNotFoundException e) {
            }
        }
    }
    public static class color {
        public static int apptentive_about_link=0x7f050032;
        public static int apptentive_about_text=0x7f050031;
        public static int apptentive_about_title=0x7f050030;
        public static int apptentive_about_version=0x7f050033;
        public static int apptentive_activity_background=0x7f050020;
        public static int apptentive_activity_frame=0x7f05001f;
        public static int apptentive_blue=0x7f050035;
        public static int apptentive_branding_text=0x7f05002f;
        /**  TODO: Remove these colors, or do something better with them. 
         */
        public static int apptentive_dark_blue=0x7f050034;
        public static int apptentive_dialog_background=0x7f050007;
        public static int apptentive_dialog_body_text=0x7f05000a;
        public static int apptentive_dialog_button_negative=0x7f05000d;
        public static int apptentive_dialog_button_negative_border_focused=0x7f050015;
        public static int apptentive_dialog_button_negative_disabled=0x7f05000f;
        public static int apptentive_dialog_button_negative_disabled_text=0x7f050010;
        public static int apptentive_dialog_button_negative_focused=0x7f050011;
        public static int apptentive_dialog_button_negative_focused_text=0x7f050012;
        public static int apptentive_dialog_button_negative_pressed=0x7f050013;
        public static int apptentive_dialog_button_negative_pressed_text=0x7f050014;
        public static int apptentive_dialog_button_negative_text=0x7f05000e;
        public static int apptentive_dialog_button_positive=0x7f050016;
        public static int apptentive_dialog_button_positive_border_focused=0x7f05001e;
        public static int apptentive_dialog_button_positive_disabled=0x7f050018;
        public static int apptentive_dialog_button_positive_disabled_text=0x7f050019;
        public static int apptentive_dialog_button_positive_focused=0x7f05001a;
        public static int apptentive_dialog_button_positive_focused_text=0x7f05001b;
        public static int apptentive_dialog_button_positive_pressed=0x7f05001c;
        public static int apptentive_dialog_button_positive_pressed_text=0x7f05001d;
        public static int apptentive_dialog_button_positive_text=0x7f050017;
        public static int apptentive_dialog_form_text=0x7f05000b;
        public static int apptentive_dialog_title_background=0x7f050008;
        public static int apptentive_dialog_title_text=0x7f050009;
        public static int apptentive_dialog_validation_text_invalid=0x7f05000c;
        public static int apptentive_message_auto_separator=0x7f050005;
        public static int apptentive_message_auto_text=0x7f050006;
        public static int apptentive_message_center_header_text_shadow=0x7f050004;
        public static int apptentive_message_center_timestamp=0x7f050002;
        public static int apptentive_message_center_timestamp_shadow=0x7f050003;
        public static int apptentive_message_sender_text=0x7f050001;
        public static int apptentive_survey_answer_text=0x7f05002d;
        public static int apptentive_survey_content_background=0x7f050023;
        public static int apptentive_survey_footer_background=0x7f05002e;
        public static int apptentive_survey_question_answer_text=0x7f05002b;
        public static int apptentive_survey_question_background=0x7f050024;
        public static int apptentive_survey_question_instruction_background_invalid=0x7f050029;
        public static int apptentive_survey_question_instruction_background_valid=0x7f050027;
        public static int apptentive_survey_question_instruction_text=0x7f050025;
        public static int apptentive_survey_question_instruction_text_invalid=0x7f050028;
        public static int apptentive_survey_question_instruction_text_valid=0x7f050026;
        public static int apptentive_survey_question_separator=0x7f05002c;
        public static int apptentive_survey_question_text=0x7f05002a;
        public static int apptentive_survey_separator=0x7f050022;
        public static int apptentive_survey_title_text=0x7f050021;
        public static int apptentive_text_message_text=0x7f050000;
        static {
            try {
                Class<?> realR = Class.forName("io.trigger.forge.android.inspector.R");
                for (Class<?> c : realR.getClasses()) {
                    if (c.getSimpleName().equals("color")) {
                        for (Field f : color.class.getDeclaredFields()) {
                            try {
                                f.set(null, c.getDeclaredField(f.getName()).get(null));
                            } catch (IllegalArgumentException e) {
                            } catch (IllegalAccessException e) {
                            } catch (NoSuchFieldException e) {
                            }
                        }
                        break;
                    }
                }               
            } catch (ClassNotFoundException e) {
            }
        }
    }
    public static class dimen {
        public static int apptentive_activity_side_padding=0x7f060006;
        public static int apptentive_activity_side_padding_360dp_land=0x7f060008;
        public static int apptentive_activity_side_padding_360dp_port=0x7f06000a;
        public static int apptentive_activity_side_padding_600dp_land=0x7f06000c;
        public static int apptentive_activity_side_padding_600dp_port=0x7f06000e;
        public static int apptentive_activity_vertical_padding=0x7f060007;
        public static int apptentive_activity_vertical_padding_360dp_land=0x7f060009;
        public static int apptentive_activity_vertical_padding_360dp_port=0x7f06000b;
        public static int apptentive_activity_vertical_padding_600dp_land=0x7f06000d;
        public static int apptentive_activity_vertical_padding_600dp_port=0x7f06000f;
        public static int apptentive_text_large=0x7f060000;
        public static int apptentive_text_medium=0x7f060001;
        public static int apptentive_text_medium_small=0x7f060002;
        public static int apptentive_text_small=0x7f060003;
        public static int apptentive_text_small_tiny=0x7f060004;
        public static int apptentive_text_tiny=0x7f060005;
        static {
            try {
                Class<?> realR = Class.forName("io.trigger.forge.android.inspector.R");
                for (Class<?> c : realR.getClasses()) {
                    if (c.getSimpleName().equals("dimen")) {
                        for (Field f : dimen.class.getDeclaredFields()) {
                            try {
                                f.set(null, c.getDeclaredField(f.getName()).get(null));
                            } catch (IllegalArgumentException e) {
                            } catch (IllegalAccessException e) {
                            } catch (NoSuchFieldException e) {
                            }
                        }
                        break;
                    }
                }               
            } catch (ClassNotFoundException e) {
            }
        }
    }
    public static class drawable {
        public static int android_ic_action_photo=0x7f020000;
        public static int android_ic_action_send=0x7f020001;
        public static int android_ic_menu_start_conversation=0x7f020002;
        public static int android_textfield_activated_holo_light=0x7f020003;
        public static int android_textfield_default=0x7f020004;
        public static int apptentive_activity_background=0x7f020005;
        public static int apptentive_blue_denim=0x7f020006;
        public static int apptentive_dialog_background=0x7f020007;
        public static int apptentive_dialog_negative_button=0x7f020008;
        public static int apptentive_dialog_negative_button_text=0x7f020009;
        public static int apptentive_dialog_positive_button=0x7f02000a;
        public static int apptentive_dialog_positive_button_text=0x7f02000b;
        public static int apptentive_grey_denim=0x7f02000c;
        public static int apptentive_grey_texture=0x7f02000d;
        public static int apptentive_header_background=0x7f02000e;
        public static int apptentive_header_background_50px=0x7f02000f;
        public static int apptentive_icon_small=0x7f020010;
        public static int apptentive_icon_small_layout=0x7f020011;
        public static int apptentive_logo=0x7f020012;
        public static int apptentive_logo_bitmap=0x7f020013;
        public static int apptentive_logo_black=0x7f020014;
        public static int apptentive_logo_reverse=0x7f020015;
        public static int apptentive_message_bubble_incoming_top=0x7f020016;
        public static int apptentive_message_bubble_outgoing_top=0x7f020017;
        public static int apptentive_message_center_background_denim=0x7f020018;
        public static int apptentive_message_center_drawer_background_denim=0x7f020019;
        public static int apptentive_message_center_header_default=0x7f02001a;
        public static int apptentive_message_center_header_denim=0x7f02001b;
        public static int apptentive_message_incoming_2=0x7f02001c;
        public static int apptentive_message_incoming_3=0x7f02001d;
        public static int apptentive_message_outgoing_2=0x7f02001e;
        public static int apptentive_message_outgoing_3=0x7f02001f;
        public static int apptentive_paper_bg=0x7f020020;
        public static int apptentive_survey_question_background=0x7f020021;
        public static int apptentive_survey_question_background_invalid=0x7f020022;
        public static int apptentive_survey_send_button=0x7f020023;
        public static int apptentive_survey_send_button_text=0x7f020024;
        public static int avatar=0x7f020025;
        public static int list_item_handle_25x20=0x7f020026;
        static {
            try {
                Class<?> realR = Class.forName("io.trigger.forge.android.inspector.R");
                for (Class<?> c : realR.getClasses()) {
                    if (c.getSimpleName().equals("drawable")) {
                        for (Field f : drawable.class.getDeclaredFields()) {
                            try {
                                f.set(null, c.getDeclaredField(f.getName()).get(null));
                            } catch (IllegalArgumentException e) {
                            } catch (IllegalAccessException e) {
                            } catch (NoSuchFieldException e) {
                            }
                        }
                        break;
                    }
                }               
            } catch (ClassNotFoundException e) {
            }
        }
    }
    public static class id {
        public static int about_description_link=0x7f070001;
        public static int answer_container=0x7f070029;
        public static int answer_text=0x7f07002f;
        public static int apptentive_branding_view=0x7f070004;
        public static int apptentive_file_message_image=0x7f07000c;
        public static int apptentive_file_message_text=0x7f07000b;
        public static int apptentive_intro_instructions_container=0x7f070018;
        public static int apptentive_message_auto_body=0x7f07000a;
        public static int apptentive_message_auto_frame=0x7f070008;
        public static int apptentive_message_auto_title=0x7f070009;
        public static int apptentive_message_avatar=0x7f07001f;
        public static int apptentive_message_body=0x7f070020;
        public static int apptentive_message_center_attach_button=0x7f070011;
        public static int apptentive_message_center_header_title=0x7f07000f;
        public static int apptentive_message_center_list=0x7f070010;
        public static int apptentive_message_center_message=0x7f070012;
        public static int apptentive_message_center_powered_by_apptentive=0x7f070014;
        public static int apptentive_message_center_powered_by_text=0x7f070015;
        public static int apptentive_message_center_root=0x7f07000e;
        public static int apptentive_message_center_send=0x7f070013;
        public static int apptentive_message_center_view=0x7f070000;
        public static int apptentive_message_sender_name=0x7f07001e;
        public static int apptentive_message_timestamp=0x7f070021;
        public static int apptentive_text_message_text=0x7f07000d;
        public static int body=0x7f070016;
        public static int checkbox=0x7f07002e;
        public static int choice=0x7f07002c;
        public static int choice_container=0x7f07002b;
        public static int choice_text=0x7f07002d;
        public static int close=0x7f070030;
        public static int description=0x7f070024;
        public static int email=0x7f070019;
        public static int email_validation_message=0x7f07001a;
        public static int message=0x7f07001b;
        public static int no=0x7f070006;
        public static int no_thanks=0x7f07001c;
        public static int ok=0x7f070017;
        public static int privacy_link=0x7f070002;
        public static int question_background_validation=0x7f07002a;
        public static int question_instructions=0x7f070027;
        public static int question_title=0x7f070026;
        public static int question_top_separater=0x7f070028;
        public static int questions=0x7f070025;
        public static int rate=0x7f070022;
        public static int remind=0x7f070023;
        public static int send=0x7f07001d;
        public static int title=0x7f070005;
        public static int version=0x7f070003;
        public static int view_messages=0x7f070031;
        public static int yes=0x7f070007;
        static {
            try {
                Class<?> realR = Class.forName("io.trigger.forge.android.inspector.R");
                for (Class<?> c : realR.getClasses()) {
                    if (c.getSimpleName().equals("id")) {
                        for (Field f : id.class.getDeclaredFields()) {
                            try {
                                f.set(null, c.getDeclaredField(f.getName()).get(null));
                            } catch (IllegalArgumentException e) {
                            } catch (IllegalAccessException e) {
                            } catch (NoSuchFieldException e) {
                            }
                        }
                        break;
                    }
                }               
            } catch (ClassNotFoundException e) {
            }
        }
    }
    public static class layout {
        public static int apptentive_about=0x7f030000;
        public static int apptentive_about_content=0x7f030001;
        public static int apptentive_branding=0x7f030002;
        public static int apptentive_enjoyment_dialog=0x7f030003;
        public static int apptentive_enjoyment_dialog_content=0x7f030004;
        public static int apptentive_message_auto=0x7f030005;
        public static int apptentive_message_body_file=0x7f030006;
        public static int apptentive_message_body_text=0x7f030007;
        public static int apptentive_message_center=0x7f030008;
        public static int apptentive_message_center_content=0x7f030009;
        public static int apptentive_message_center_email_validation=0x7f03000a;
        public static int apptentive_message_center_email_validation_content=0x7f03000b;
        public static int apptentive_message_center_intro_dialog=0x7f03000c;
        public static int apptentive_message_center_intro_dialog_content=0x7f03000d;
        public static int apptentive_message_center_thank_you_dialog=0x7f03000e;
        public static int apptentive_message_incoming=0x7f03000f;
        public static int apptentive_message_outgoing=0x7f030010;
        public static int apptentive_rating_dialog=0x7f030011;
        public static int apptentive_rating_dialog_content=0x7f030012;
        public static int apptentive_survey=0x7f030013;
        public static int apptentive_survey_content=0x7f030014;
        public static int apptentive_survey_question_base=0x7f030015;
        public static int apptentive_survey_question_multichoice=0x7f030016;
        public static int apptentive_survey_question_multichoice_choice=0x7f030017;
        public static int apptentive_survey_question_singleline=0x7f030018;
        public static int apptentive_thank_you_dialog_content=0x7f030019;
        static {
            try {
                Class<?> realR = Class.forName("io.trigger.forge.android.inspector.R");
                for (Class<?> c : realR.getClasses()) {
                    if (c.getSimpleName().equals("layout")) {
                        for (Field f : layout.class.getDeclaredFields()) {
                            try {
                                f.set(null, c.getDeclaredField(f.getName()).get(null));
                            } catch (IllegalArgumentException e) {
                            } catch (IllegalAccessException e) {
                            } catch (NoSuchFieldException e) {
                            }
                        }
                        break;
                    }
                }               
            } catch (ClassNotFoundException e) {
            }
        }
    }
    public static class string {
        public static int apptentive_about_description=0x7f080014;
        public static int apptentive_about_description_link=0x7f080015;
        public static int apptentive_about_privacy=0x7f080016;
        public static int apptentive_about_privacy_link=0x7f080017;
        public static int apptentive_about_title=0x7f080013;
        public static int apptentive_developer=0x7f080005;
        public static int apptentive_dialog_email_validation_failed_body=0x7f080025;
        public static int apptentive_dialog_email_validation_failed_title=0x7f080024;
        public static int apptentive_do_you_love_this_app=0x7f080018;
        public static int apptentive_edittext_hint_email=0x7f080011;
        public static int apptentive_give_feedback=0x7f080008;
        public static int apptentive_intro_dialog_body=0x7f08001f;
        public static int apptentive_intro_dialog_edittext_hint=0x7f080020;
        public static int apptentive_intro_dialog_title_default=0x7f08001e;
        public static int apptentive_intro_dialog_title_no_love=0x7f08001d;
        public static int apptentive_message_auto_body_manual=0x7f08002d;
        public static int apptentive_message_auto_body_no_love=0x7f08002e;
        public static int apptentive_message_center_attachment_title=0x7f08002b;
        public static int apptentive_message_center_compose_hint=0x7f08002a;
        public static int apptentive_message_center_title=0x7f080029;
        /**  This is a Java format. 
         */
        public static int apptentive_message_sent_timestamp_format=0x7f08002c;
        public static int apptentive_no=0x7f080002;
        public static int apptentive_no_thanks=0x7f08000a;
        public static int apptentive_ok=0x7f080000;
        public static int apptentive_oops=0x7f080006;
        public static int apptentive_optional=0x7f08000e;
        public static int apptentive_powered_by_apptentive=0x7f080012;
        public static int apptentive_rate_this_app=0x7f08001a;
        public static int apptentive_rating_error=0x7f08001c;
        public static int apptentive_rating_message_fs=0x7f080019;
        public static int apptentive_rating_provider_no_amazon_appstore=0x7f080030;
        public static int apptentive_rating_provider_no_google_play=0x7f08002f;
        public static int apptentive_rating_provider_no_mikandi=0x7f080031;
        public static int apptentive_rating_remind=0x7f08001b;
        public static int apptentive_required=0x7f08000d;
        public static int apptentive_send=0x7f080007;
        public static int apptentive_sending=0x7f08000f;
        public static int apptentive_skip=0x7f080003;
        public static int apptentive_survey_header=0x7f080026;
        public static int apptentive_survey_send_response=0x7f080028;
        public static int apptentive_survey_singleline_hint=0x7f080027;
        public static int apptentive_thank_you=0x7f08000b;
        public static int apptentive_thank_you_dialog_body=0x7f080021;
        public static int apptentive_thank_you_dialog_close=0x7f080022;
        public static int apptentive_thank_you_dialog_view_messages=0x7f080023;
        public static int apptentive_thanks=0x7f080009;
        public static int apptentive_version=0x7f080010;
        public static int apptentive_were_sorry=0x7f08000c;
        public static int apptentive_yes=0x7f080001;
        public static int apptentive_you=0x7f080004;
        static {
            try {
                Class<?> realR = Class.forName("io.trigger.forge.android.inspector.R");
                for (Class<?> c : realR.getClasses()) {
                    if (c.getSimpleName().equals("string")) {
                        for (Field f : string.class.getDeclaredFields()) {
                            try {
                                f.set(null, c.getDeclaredField(f.getName()).get(null));
                            } catch (IllegalArgumentException e) {
                            } catch (IllegalAccessException e) {
                            } catch (NoSuchFieldException e) {
                            }
                        }
                        break;
                    }
                }               
            } catch (ClassNotFoundException e) {
            }
        }
    }
    public static class style {
        public static int Apptentive_Theme_Transparent=0x7f09000d;
        public static int ApptentiveHeader=0x7f090000;
        public static int ApptentiveHeader_Denim=0x7f090005;
        /** 
        <style name="ApptentiveHeader" parent="ApptentiveHeader.Denim"/>
        <style name="ApptentiveHeaderText" parent="ApptentiveHeaderText.Denim"/>
        <style name="ApptentiveMainArea" parent="ApptentiveMainArea.Denim"/>
        <style name="ApptentiveMessageCenterDrawer" parent="ApptentiveMessageCenterDrawer.Denim"/>
    
         */
        public static int ApptentiveHeader_Plain=0x7f090004;
        public static int ApptentiveHeaderText=0x7f090001;
        public static int ApptentiveHeaderText_Default=0x7f090006;
        public static int ApptentiveHeaderText_Denim=0x7f090008;
        public static int ApptentiveHeaderText_Plain=0x7f090007;
        public static int ApptentiveMainArea=0x7f090002;
        public static int ApptentiveMainArea_Denim=0x7f09000a;
        public static int ApptentiveMainArea_Plain=0x7f090009;
        public static int ApptentiveMessageCenterDrawer=0x7f090003;
        public static int ApptentiveMessageCenterDrawer_Denim=0x7f09000c;
        public static int ApptentiveMessageCenterDrawer_Plain=0x7f09000b;
        static {
            try {
                Class<?> realR = Class.forName("io.trigger.forge.android.inspector.R");
                for (Class<?> c : realR.getClasses()) {
                    if (c.getSimpleName().equals("style")) {
                        for (Field f : style.class.getDeclaredFields()) {
                            try {
                                f.set(null, c.getDeclaredField(f.getName()).get(null));
                            } catch (IllegalArgumentException e) {
                            } catch (IllegalAccessException e) {
                            } catch (NoSuchFieldException e) {
                            }
                        }
                        break;
                    }
                }               
            } catch (ClassNotFoundException e) {
            }
        }
    }
}