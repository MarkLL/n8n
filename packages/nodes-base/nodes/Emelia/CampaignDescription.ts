import {
	INodeProperties,
} from 'n8n-workflow';

export const campaignOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'get',
		description: 'Operation to perform',
		options: [
			{
				name: 'Add Contact',
				value: 'addContact',
			},
			{
				name: 'Create',
				value: 'create',
			},
			{
				name: 'Get',
				value: 'get',
			},
			{
				name: 'Get All',
				value: 'getAll',
			},
			{
				name: 'Pause',
				value: 'pause',
			},
			{
				name: 'Start',
				value: 'start',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
			},
		},
	},
] as INodeProperties[];

export const campaignFields = [
	// ----------------------------------
	//       campaign: addContact
	// ----------------------------------
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getCampaigns',
		},
		default: [],
		required: true,
		description: 'The ID of the campaign to add the contact to.',
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'addContact',
				],
			},
		},
	},
	{
		displayName: 'Contact Email',
		name: 'contactEmail',
		type: 'string',
		required: true,
		default: '',
		description: 'The email of the contact to add to the campaign.',
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'addContact',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'addContact',
				],
			},
		},
		options: [
			{
				displayName: 'Custom Fields',
				name: 'customFieldsUi',
				placeholder: 'Add Custom Field',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				description: 'Filter by custom fields ',
				default: {},
				options: [
					{
						name: 'customFieldsValues',
						displayName: 'Custom Field',
						values: [
							{
								displayName: 'Field Name',
								name: 'fieldName',
								type: 'string',
								default: '',
								description: 'The name of the field to add custom field to.',
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								default: '',
								description: 'The value to set on custom field.',
							},
						],
					},
				],
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'First name of the contact to add.',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Last name of the contact to add.',
			},
			{
				displayName: 'Last Contacted',
				name: 'lastContacted',
				type: 'string',
				default: '',
				description: 'Last contacted date of the contact to add.',
			},
			{
				displayName: 'Last Open',
				name: 'lastOpen',
				type: 'string',
				default: '',
				description: 'Last opened date of the contact to add.',
			},
			{
				displayName: 'Last Replied',
				name: 'lastReplied',
				type: 'string',
				default: '',
				description: 'Last replied date of the contact to add.',
			},
			{
				displayName: 'Mails Sent',
				name: 'mailsSent',
				type: 'number',
				default: 0,
				description: 'Number of emails sent to the contact to add.',
			},
			{
				displayName: 'Phone Number',
				name: 'phoneNumber',
				type: 'string',
				default: '',
				description: 'Phone number of the contact to add.',
			},
		],
	},

	// ----------------------------------
	//         campaign: create
	// ----------------------------------
	{
		displayName: 'Campaign Name',
		name: 'campaignName',
		type: 'string',
		required: true,
		default: '',
		description: 'The name of the campaign to create.',
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'create',
				],
			},
		},
	},

	// ----------------------------------
	//       campaign: get
	// ----------------------------------
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the campaign to retrieve.',
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------
	//       campaign: getAll
	// ----------------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Return all results.',
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 100,
		description: 'The number of results to return.',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
	},

	// ----------------------------------
	//       campaign: pause
	// ----------------------------------
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the campaign to pause. The campaign must be in RUNNING mode.',
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'pause',
				],
			},
		},
	},

	// ----------------------------------
	//       campaign: start
	// ----------------------------------
	{
		displayName: 'Campaign ID',
		name: 'campaignId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the campaign to start. Email provider and contacts must be set.',
		displayOptions: {
			show: {
				resource: [
					'campaign',
				],
				operation: [
					'start',
				],
			},
		},
	},

] as INodeProperties[];
