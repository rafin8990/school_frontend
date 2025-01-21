'use client';

import SharedTable from '@/components/table/SharedTable';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCreate, useDelete, useGetList, useUpdate } from '@/hooks/APIHooks';
import { toast } from '@/hooks/use-toast';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';

interface TeacherData {
  _id: string;
  name: string;
  designation: string;
  image: string;
}

const TeacherContainer = () => {
  const pathName = usePathname();
  const { data: teachersData, isLoading } = useGetList<TeacherData>('/teachers', 'teachers');
  const { mutateAsync: createTeacher, isPending: isCreating } = useCreate('/teachers', 'teachers');
  const { mutateAsync: updateTeacher, isPending: isUpdating } = useUpdate<TeacherData>(
    '/teachers',
    'teachers',
  );
  const { mutateAsync: deleteTeacher, isPending: isDeleting } = useDelete('/teachers', 'teachers');

  const [currentTeacher, setCurrentTeacher] = useState<Partial<TeacherData> | null>(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleEdit = (teacher: TeacherData) => {
    setCurrentTeacher(teacher);
    setDialogOpen(true);
  };

  const handleAddNew = () => {
    setCurrentTeacher({ name: '', designation: '', image: '' });
    setDialogOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentTeacher((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const previewUrl = URL.createObjectURL(selectedFile);
      setCurrentTeacher((prev) => (prev ? { ...prev, image: previewUrl } : null));
    }
  };

  const handleSave = useCallback(async () => {
    if (!currentTeacher) return;

    try {
      const formData = new FormData();
      formData.append('name', currentTeacher.name || '');
      formData.append('designation', currentTeacher.designation || '');
      if (file) {
        formData.append('image', file);
      }

      if (currentTeacher._id) {
        await updateTeacher({
          id: currentTeacher._id,
          body: formData as unknown as TeacherData,
          callbacks: {
            onSuccess: () => {
              toast({
                title: 'Success',
                description: 'Teacher updated successfully',
              });
              setDialogOpen(false);
            },
            onError: () => {
              toast({
                title: 'Error',
                description: 'Failed to update teacher',
                variant: 'destructive',
              });
            },
          },
        });
      } else {
        await createTeacher({
          body: formData,
          callbacks: {
            onSuccess: () => {
              toast({
                title: 'Success',
                description: 'Teacher created successfully',
              });
              setDialogOpen(false);
            },
            onError: () => {
              toast({
                title: 'Error',
                description: 'Failed to create teacher',
                variant: 'destructive',
              });
            },
          },
        });
      }
    } catch (error) {
      console.error('Failed to save teacher:', error);
    }
  }, [currentTeacher, file, updateTeacher, createTeacher]);

  const handleDelete = useCallback(
    async (id: string) => {
      try {
        await deleteTeacher({
          id,
          callbacks: {
            onSuccess: () => {
              toast({
                title: 'Success',
                description: 'Teacher deleted successfully',
              });
            },
            onError: () => {
              toast({
                title: 'Error',
                description: 'Failed to delete teacher',
                variant: 'destructive',
              });
            },
          },
        });
      } catch (error) {
        console.error('Failed to delete teacher:', error);
      }
    },
    [deleteTeacher],
  );

  const columns = [
    {
      title: 'Image',
      dataKey: 'image',
      row: (data: TeacherData) => (
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data.image}`}
          alt={data.name}
          width={50}
          height={50}
          className="rounded-full"
        />
      ),
    },
    {
      title: 'Name',
      dataKey: 'name',
      row: (data: TeacherData) => <span>{data.name}</span>,
    },
    {
      title: 'Designation',
      dataKey: 'designation',
      row: (data: TeacherData) => <span>{data.designation}</span>,
    },
    {
      title: 'Actions',
      dataKey: 'actions',
      row: (data: TeacherData) => (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleEdit(data)}
            disabled={isUpdating}
          >
            Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => handleDelete(data._id)}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <section className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Teachers</h2>
        {pathName.includes('dashboard') && <Button onClick={handleAddNew}>Add New Teacher</Button>}
      </div>

      <SharedTable columns={columns} isLoading={isLoading} data={teachersData || []} />

      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{currentTeacher?._id ? 'Edit Teacher' : 'Add New Teacher'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={currentTeacher?.name || ''}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                name="designation"
                value={currentTeacher?.designation || ''}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="teacherImage">Image</Label>
              <Input
                id="teacherImage"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-2"
              />
              {currentTeacher?.image && (
                <Image
                  src={
                    currentTeacher.image.startsWith('blob:')
                      ? currentTeacher.image
                      : `${process.env.NEXT_PUBLIC_IMAGE_URL}/${currentTeacher.image}`
                  }
                  alt="Teacher Preview"
                  width={100}
                  height={100}
                  className="mt-2 rounded-full"
                />
              )}
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave} disabled={isCreating || isUpdating}>
              {isCreating || isUpdating ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeacherContainer;
