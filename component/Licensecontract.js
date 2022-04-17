import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    ScrollView
} from 'react-native';


const Licensecontract = () => {
    /* Animation satrting page */

    return (
      <ScrollView>
        <View style={styles.ui_splash_contain_title_license}>
          <Text style={styles.ui_splash_title_license}>Welcome in contract license</Text>
        </View>
        <View>
          <Text style={styles.ui_splash_big_title_license}>
                GNU GENERAL PUBLIC LICENSE
                                 Version 3, 29 June 2007
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            Copyright (C) 2007 Free Software Foundation, Inc.
            Everyone is permitted to copy and distribute verbatim copies
            of this license document, but changing it is not allowed.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_big_title_license}>Preamble</Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            The GNU General Public License is a free, copyleft license for
          software and other kinds of works.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            The licenses for most software and other practical works are designed
          to take away your freedom to share and change the works.  By contrast,
          the GNU General Public License is intended to guarantee your freedom to
          share and change all versions of a program--to make sure it remains free
          software for all its users.  We, the Free Software Foundation, use the
          GNU General Public License for most of our software; it applies also to
          any other work released this way by its authors.  You can apply it to
          your programs, too.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            When we speak of free software, we are referring to freedom, not
          price.  Our General Public Licenses are designed to make sure that you
          have the freedom to distribute copies of free software (and charge for
          them if you wish), that you receive source code or can get it if you
          want it, that you can change the software or use pieces of it in new
          free programs, and that you know you can do these things.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            To protect your rights, we need to prevent others from denying you
          these rights or asking you to surrender the rights.  Therefore, you have
          certain responsibilities if you distribute copies of the software, or if
          you modify it: responsibilities to respect the freedom of others.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            For example, if you distribute copies of such a program, whether
          gratis or for a fee, you must pass on to the recipients the same
          freedoms that you received.  You must make sure that they, too, receive
          or can get the source code.  And you must show them these terms so they
          know their rights.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            Developers that use the GNU GPL protect your rights with two steps:
          (1) assert copyright on the software, and (2) offer you this License
          giving you legal permission to copy, distribute and/or modify it.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            For the developers' and authors' protection, the GPL clearly explains
          that there is no warranty for this free software.  For both users' and
          authors' sake, the GPL requires that modified versions be marked as
          changed, so that their problems will not be attributed erroneously to
          authors of previous versions.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            Some devices are designed to deny users access to install or run
          modified versions of the software inside them, although the manufacturer
          can do so.  This is fundamentally incompatible with the aim of
          protecting users freedom to change the software.  The systematic
          pattern of such abuse occurs in the area of products for individuals to
          use, which is precisely where it is most unacceptable.  Therefore, we
          have designed this version of the GPL to prohibit the practice for those
          products.  If such problems arise substantially in other domains, we
          stand ready to extend this provision to those domains in future versions
          of the GPL, as needed to protect the freedom of users.

            Finally, every program is threatened constantly by software patents.
          States should not allow patents to restrict development and use of
          software on general-purpose computers, but in those that do, we wish to
          avoid the special danger that patents applied to a free program could
          make it effectively proprietary.  To prevent this, the GPL assures that
          patents cannot be used to render the program non-free.

            The precise terms and conditions for copying, distribution and
          modification follow.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_big_title_license}>
                 TERMS AND CONDITIONS
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_big_title_license}>
                   0. Definitions.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
              "This License" refers to version 3 of the GNU General Public License.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            "Copyright" also means copyright-like laws that apply to other kinds of
          works, such as semiconductor masks.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            "The Program" refers to any copyrightable work licensed under this
          License.  Each licensee is addressed as "you".  "Licensees" and
          "recipients" may be individuals or organizations.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            To "modify" a work means to copy from or adapt all or part of the work
          in a fashion requiring copyright permission, other than the making of an
          exact copy.  The resulting work is called a "modified version" of the
          earlier work or a work "based on" the earlier work.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            A "covered work" means either the unmodified Program or a work based
          on the Program.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            To "propagate" a work means to do anything with it that, without
          permission, would make you directly or secondarily liable for
          infringement under applicable copyright law, except executing it on a
          computer or modifying a private copy.  Propagation includes copying,
          distribution (with or without modification), making available to the
          public, and in some countries other activities as well.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            To "convey" a work means any kind of propagation that enables other
          parties to make or receive copies.  Mere interaction with a user through
          a computer network, with no transfer of a copy, is not conveying.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            An interactive user interface displays "Appropriate Legal Notices"
          to the extent that it includes a convenient and prominently visible
          feature that (1) displays an appropriate copyright notice, and (2)
          tells the user that there is no warranty for the work (except to the
          extent that warranties are provided), that licensees may convey the
          work under this License, and how to view a copy of this License.  If
          the interface presents a list of user commands or options, such as a
          menu, a prominent item in the list meets this criterion.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            To "convey" a work means any kind of propagation that enables other
          parties to make or receive copies.  Mere interaction with a user through
          a computer network, with no transfer of a copy, is not conveying.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_big_title_license}>
                   1. Source Code.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            The "source code" for a work means the preferred form of the work
          for making modifications to it.  "Object code" means any non-source
          form of a work.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            A "Standard Interface" means an interface that either is an official
          standard defined by a recognized standards body, or, in the case of
          interfaces specified for a particular programming language, one that
          is widely used among developers working in that language.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            The "System Libraries" of an executable work include anything, other
          than the work as a whole, that (a) is included in the normal form of
          packaging a Major Component, but which is not part of that Major
          Component, and (b) serves only to enable use of the work with that
          Major Component, or to implement a Standard Interface for which an
          implementation is available to the public in source code form.  A
          "Major Component", in this context, means a major essential component
          (kernel, window system, and so on) of the specific operating system
          (if any) on which the executable work runs, or a compiler used to
          produce the work, or an object code interpreter used to run it.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            The "Corresponding Source" for a work in object code form means all
          the source code needed to generate, install, and (for an executable
          work) run the object code and to modify the work, including scripts to
          control those activities.  However, it does not include the work's
          System Libraries, or general-purpose tools or generally available free
          programs which are used unmodified in performing those activities but
          which are not part of the work.  For example, Corresponding Source
          includes interface definition files associated with source files for
          the work, and the source code for shared libraries and dynamically
          linked subprograms that the work is specifically designed to require,
          such as by intimate data communication or control flow between those
          subprograms and other parts of the work.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            The Corresponding Source need not include anything that users
          can regenerate automatically from other parts of the Corresponding
          Source.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_small_title_license}>
            The Corresponding Source for a work in source code form is that
          same work.
          </Text>
        </View>
        <View>
          <Text style={styles.ui_splash_big_title_license}>
              2. Basic Permissions.
          </Text>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  ui_splash_contain_title_license: {
    width: '100%',
    height: 50,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9f5db',
  },
  ui_splash_title_license: {
    alignSelf: 'flex-end',
    width: '90%',
    fontSize: 27,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#cfe1b9',
    justifyContent: 'center',
    paddingVertical: 5,
    fontFamily: 'Feather',
  },
  ui_splash_big_title_license: {
    fontSize: 25,
    margin: 10,
  },
  ui_splash_small_title_license: {
    fontSize: 18,
    margin: 5,
    textAlign: 'justify',
    fontFamily: 'AntDesign',
  }

});

export default Licensecontract;
