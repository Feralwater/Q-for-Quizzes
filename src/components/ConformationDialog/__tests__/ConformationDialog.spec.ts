import { mount } from '@vue/test-utils';
import ConformationDialog from '@/components/ConformationDialog/ConformationDialog.vue';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('ConformationDialog', () => {
  const props = {
    onConfirm: vi.fn(),
    dialog: true,
    deletedItem: 'Test Item',
    title: 'Test Title',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const wrapper = mount(ConformationDialog, { props });

  it('renders the dialog when dialog prop is true', () => {
    expect(wrapper.find('v-dialog').isVisible()).toBe(true);
  });

  it('does not render the dialog when dialog prop is false', async () => {
    await wrapper.setProps({ dialog: false });
    expect(wrapper.findComponent({ name: 'v-dialog' }).exists()).toBe(false);
  });

  it('closes the dialog when No button is clicked', async () => {
    await wrapper.find('v-btn[color="primary"]').trigger('click');
    expect(wrapper.vm.dialog).toBe(false);
  });

  it('closes the dialog when close icon is clicked', async () => {
    await wrapper.find('.close-icon').trigger('click');
    expect(wrapper.vm.dialog).toBe(false);
  });

  it('calls onConfirm function when Yes button is clicked', async () => {
    await wrapper.find('v-btn[color="danger"]').trigger('click');
    expect(props.onConfirm).toHaveBeenCalled();
  });

  it('displays the correct title and deleted item', () => {
    expect(wrapper.find('.headline span').text()).toBe('Test Title');
    expect(wrapper.find('.text-center .colored').text()).toBe('Test Item');
  });

  it('does not call onConfirm function when Yes button is not clicked and dialog is closed', async () => {
    await wrapper.find('.close-icon').trigger('click');
    expect(props.onConfirm).not.toHaveBeenCalled();
  });
});