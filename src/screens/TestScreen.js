import { useState } from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

function TestScreen({route}) {
  const formData = [
    {
      name: 'attachment',
      field_type: 'Attach',
      label: 'Attachment',
      id: 1,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'image_attachment',
      field_type: 'AttachImage',
      label: 'Image Attachment',
      id: 2,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'search_autocomplete',
      field_type: 'Autocomplete',
      label: 'Search Autocomplete',
      id: 3,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'product_barcode',
      field_type: 'Barcode',
      label: 'Product Barcode',
      id: 4,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'submit_button',
      field_type: 'Button',
      label: 'Submit Button',
      id: 5,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'accept_terms',
      field_type: 'Check',
      label: 'Accept Terms',
      id: 6,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'verification_code',
      field_type: 'Code',
      label: 'Verification Code',
      id: 7,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'color_picker',
      field_type: 'Color',
      label: 'Color Picker',
      id: 8,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'layout_break',
      field_type: 'ColumnBreak',
      label: 'Layout Break',
      id: 9,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'currency_amount',
      field_type: 'Currency',
      label: 'Currency Amount',
      id: 10,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'personal_data',
      field_type: 'Data',
      label: 'Personal Data',
      id: 11,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'event_date',
      field_type: 'Date',
      label: 'Event Date',
      id: 12,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'appointment_datetime',
      field_type: 'Datetime',
      label: 'Appointment Datetime',
      id: 13,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'task_duration',
      field_type: 'Duration',
      label: 'Task Duration',
      id: 14,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'website_link',
      field_type: 'DynamicLink',
      label: 'Website Link',
      id: 15,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'rating_value',
      field_type: 'Float',
      label: 'Rating Value',
      id: 16,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'expandable_section',
      field_type: 'Fold',
      label: 'Expandable Section',
      id: 17,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'location_coordinates',
      field_type: 'Geolocation',
      label: 'Location Coordinates',
      id: 18,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'section_title',
      field_type: 'Heading',
      label: 'Section Title',
      id: 19,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
    {
      name: 'html_content',
      field_type: 'HTML',
      label: 'HTML Content',
      id: 20,
      message: true,
      calls: true,
      whatsapp: true,
      email: true,
      parent_id: null,
    },
  ];

const [inputData, setInputData] = useState({});
const submitFormData = [];

const handleInputChange = (fieldname,enteredValue)=>{

    setInputData((prevValue)=>(
        {
            ...prevValue,
            [fieldname] : enteredValue

        }
  
    
    ));

}

const onSubmit =()=>{
console.log("formdate", inputData);
}

  const users = Object.values(route.params);
  console.log('users', users);

  //   const renderData = ({item}) => (
  //     <View style={styles.listContainer}>
  //       <Text>{item.name}</Text>
  //       <Text>{item.email}</Text>
  //       <Text>{item.age}</Text>
  //     </View>
  //   );

  const renderFormdata = ({item}) => {
    switch (item.field_type) {
      case 'Attach':
        return (
          <TextInput
            placeholder="atach-image"
            style={styles.inputBox}
            onChangeText={(value) => handleInputChange(item.name, value)}
            value={inputData[item.name] || ''}
            ></TextInput>
        );
      case 'Data':
        return (
          <TextInput
            placeholder="enter your name"
            style={styles.inputBox}
            onChangeText={(value) => handleInputChange(item.name, value)}
            value={inputData[item.name] || ''}

            ></TextInput>
        );
      case 'Date':
        return (
          <TextInput
            placeholder="enter date"
            style={styles.inputBox}
            onChangeText={(value) => handleInputChange(item.name, value)}
            value={inputData[item.name] || ''}

            ></TextInput>
        );

      default:
        return <></>;
    }
  };

  return (
    <View>
      {/*         
    enter data to the input box and then store these data in state 
    on clicking on submit button submit data in key value pair
     */}
      <FlatList
        data={formData}
        renderItem={renderFormdata}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.button}>
        <Button title="submmit" onPress={onSubmit}></Button>
      </View>
    </View>
  );
}

export default TestScreen;

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: 'grey',
    borderRadius: 10,
    borderEndWidth: 1,
    alignItems: 'center',
  },

  inputBox: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
});


