import { disableDebugTools } from '@angular/platform-browser';

// Smart DataTable
export var settings = {
  columns: {
    id: {
      title: 'ID',
      filter: false,
    },
    name: {
      title: 'Full Name',
      filter: false,
    },
  },
  attr: {
    class: "table table-responsive"
  },
  edit:{
    editButtonContent: false,

  },
  delete:{
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  }
 
};

export var data = [
  {
    id: 1,
    name: '40',
   
  },
  {
    id: 2,
    name: 'steven',
  },
 
];

export var filtersettings = {
  columns: {
    id: {
      title: 'ID',
    },
   
    email: {
      title: 'Email',
    },
   
  },
 
};

export var filerdata = [
  {
    id: 1,
    name: '40',
   
  },
  {
    id: 2,
    name: 'steven',
  },
];

